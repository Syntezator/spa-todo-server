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

  async getAllProjects() {   
    const projectsQuery = `SELECT * FROM "Project";`;
    const {rows} = await this.db.query(projectsQuery);
    const allProjects = rows.map(row => ({...row }));
    return allProjects;
  };

  async deleteProject(id) { 
   
    const deleteProjectQuery = `DELETE FROM "Project" WHERE "id" = $1`;
    await this.db.query(deleteProjectQuery, [id]);
    return true;
  };
};
