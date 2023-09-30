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

  async addTask(taskToAdd) {
    const {number, title, description, pryority, status, task, projectId} = taskToAdd;
    const addTaskQuery = `
      INSERT INTO "Task" (
        "number",
        "title",
        "description",
        "pryority", 
        "status", 
        "task", 
        "projectId"
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const {rows: [addedTask]} = await this.db.query(
      addTaskQuery, 
      [number, title, description, pryority, status, task, projectId],
    );

    return addedTask;
  };

  async getAllTasks() {   
    const tasksQuery = `SELECT * FROM "Task";`;
    const {rows} = await this.db.query(tasksQuery);
    const allTasks = rows.map(row => ({...row }));
    return allTasks;
  };

  async getTaskById(id) {   
    const taskQuery = `SELECT * FROM "Task" WHERE "id" = $1;`;
    const {rows: [taskById]} = await this.db.query(taskQuery, [id]);
    return taskById;
  };

  async deleteTask(id) {    
    const deleteTaskQuery = `DELETE FROM "Task" WHERE "id" = $1`;
    await this.db.query(deleteTaskQuery, [id]);
    return true;
  };

  async updateTask(taskToUpdate, id) {    
    const {title, description, pryority, status, task} = taskToUpdate;
    const updatedTaskQuery = `
      UPDATE "Task"
      SET "title" = $1, "description" = $2, "pryority" = $3, "status" = $4, "task" = $5
      WHERE "id" = $6
      RETURNING *;
  `;

    const { rows: [updatedTask] } = await this.db.query(
      updatedTaskQuery,
      [title, description, pryority, status, task, id]
    );

    return updatedTask;
  };
};
