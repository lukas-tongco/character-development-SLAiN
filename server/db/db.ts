import connection from "./connection";

// Still yet to be made in models "exp.ts"
import { Experience,ExperienceData } from '../../models/exp.ts'
// ----------------------------------------------

const db = connection;


// Get all experience entries
export function getAllExperienceEntries(): Promise<Experience[]> {
  return db<Experience>('experience').select()
}

// Add role (POST)
export function addExpEntry(newExpEntry: ExperienceData){
  return db('experience').insert(newExpEntry)
}


// ----------------------------------------------
// Below are potential stretch CRUD functions that can be added in at a later time 
// ----------------------------------------------

// // Delete role (DEL)
// export function deleteExpEntry(id: number): Promise<ExpEntry> {
//   return db('experience').where({id}).del()
// }

// // Get role by id (GET)
// export function getExpEntryById(id: number): Promise<ExpEntry> {
//   return db('experience').where({id}).select().first()
// }

// // Update role (PATCH)
// export function updateExpEntry(id: number, updatedExpEntry: ExpEntry): Promise<ExpEntry> {
//   return db('experience').where({id}).update(updatedExpEntry)
// }

