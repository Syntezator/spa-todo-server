/*********************************
  Project
*********************************/

CREATE TABLE "Project" (
  "id" BIGINT GENERATED ALWAYS AS IDENTITY,
  "title" VARCHAR NOT NULL,
  "description" VARCHAR
);

/*********************************
  Task
*********************************/

CREATE TYPE task_type AS ENUM (
  'task', 
  'subtask'
);

CREATE TYPE status_type AS ENUM (
  'queue', 
  'development',
  'done'
);

CREATE TABLE "Task" (
  "id" BIGINT GENERATED ALWAYS AS IDENTITY,
  "number" BIGINT NOT NULL,
  "title" VARCHAR NOT NULL,
  "description" VARCHAR,
  "start" DATE DEFAULT CURRENT_DATE,
  "time" VARCHAR,
  "end" VARCHAR,
  "priority" VARCHAR NOT NULL,
  "file" BYTEA,
  "status" status_type,
  "task" task_type,
  "projectId" BIGINT NOT NULL
);

/*********************************
  Comment
*********************************/

CREATE TABLE "Comment" (
  "id" BIGINT GENERATED ALWAYS AS IDENTITY,
  "title" VARCHAR NOT NULL,
  "taskId" BIGINT NOT NULL
);




