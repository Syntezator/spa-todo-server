/**
 * @typedef {import('./types').Db} Db
 * @typedef {import('./types').ProjectToAdd} ProjectToAdd
 * @typedef {import('./types').ProjectFromDb} ProjectFromDb
 */

export class AccessControlModel {
  /** @param {Db} db */
  constructor(db) {
    this.db = db;
  };

  /**
   * @function addProject
   * @param {ProjectToAdd} projectToAdd 
   * @returns {Promise<ProjectFromDb>}
   */

  async addProject(projectToAdd) {
    const {title, description} = projectToAdd;
    const addProjectQuery = `
      INSERT INTO "Project" (
        "title",
        "description"
      ) 
      VALUES ($1, $2)
      RETURNING *;
    `;

    const {rows: [addedProject]} = await this.db.query(
      addProjectQuery, 
      [title, description],
    );

    return addedProject;
  };

};
