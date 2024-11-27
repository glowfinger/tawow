import { PRIVATE_GOOGLE_API_SHEET_ID } from '$env/static/private';
import credentials from '$lib/Credentials';
import { google } from 'googleapis';
import type { LayoutServerLoad } from './$types';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const SPREADSHEET_ID = PRIVATE_GOOGLE_API_SHEET_ID;

export const load: LayoutServerLoad = async () => {
	const auth = new google.auth.GoogleAuth({
		credentials: credentials,
		scopes: SCOPES
	});

	const client = await auth.getClient();

	const sheets = google.sheets({ version: 'v4', auth: client as any });

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: SPREADSHEET_ID,
		range: 'Form responses 1'
	});

	response.data?.values?.shift();

	const coordinates = response.data?.values?.map((row) => {
		return {
			createdAt: row[0],
			name: row[1],
			dimension: row[2],
			x: row[3],
			y: row[4],
			z: row[5]
		};
	});

	return {
		coordinates
	};
};
