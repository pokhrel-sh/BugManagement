-- DROP TABLE IF EXISTS "Priority";
-- DROP TABLE IF EXISTS "Bug";
-- DROP TABLE IF EXISTS "Framework";
-- DROP TABLE IF EXISTS "Status";
-- DROP TABLE IF EXISTS "Project";
-- DROP TABLE IF EXISTS "Developer";
-- DROP TABLE IF EXISTS "BugAssignment";
-- DROP TABLE IF EXISTS "History";



CREATE TABLE "Priority" (
  "priorityID"	INTEGER NOT NULL UNIQUE,
  "priorityName"	TEXT NOT NULL,
  PRIMARY KEY("priorityID" AUTOINCREMENT)
);
CREATE TABLE "Framework" (
  "frameworkID"	INTEGER NOT NULL UNIQUE,
  "frameworkName"	TEXT,
  PRIMARY KEY("frameworkID" AUTOINCREMENT)
);
CREATE TABLE "Status" (
  "statusID"	INTEGER NOT NULL UNIQUE,
  "statusName"	TEXT,
  PRIMARY KEY("statusID" AUTOINCREMENT)
);
CREATE TABLE "Project" (
  "projectID" INTEGER NOT NULL UNIQUE,
  "projectName" TEXT,
  PRIMARY KEY("projectID" AUTOINCREMENT)
);

CREATE TABLE "Bug"(
  "bugID" INTEGER NOT NULL UNIQUE,
  "description" TEXT,
  "projectName" TEXT,
  "submissionDate" INTEGER,
  "dateOpened" INTEGER,
  "frameworkName" TEXT,
  "priorityName" TEXT,
  "statusName" TEXT,
  PRIMARY KEY ("bugID" AUTOINCREMENT),
  FOREIGN KEY ("frameworkName") REFERENCES "Framework"("frameworkName"),
  FOREIGN KEY ("projectName") REFERENCES "Project"("projectName"),
  FOREIGN KEY ("statusName") REFERENCES "Status"("statusName"),
  FOREIGN KEY ("priorityName") REFERENCES "Priority"("priorityName")

);

CREATE TABLE "History"(
  "historyID" INTEGER NOT NULL UNIQUE,
  "bugID" INTEGER NOT NULL,
  "dateCompleted" INTEGER,
  "statusName" TEXT,
  "priorityName" TEXT,
  PRIMARY KEY("historyID" AUTOINCREMENT),
  FOREIGN KEY("statusName") REFERENCES "Status"("statusName"),
  FOREIGN KEY("priorityName") REFERENCES "Priority"("priorityName")
);
CREATE TABLE "Developer" (
  "devID" INTEGER NOT NULL UNIQUE,
  "devName" TEXT,
  "bugID" INTEGER NOT NULL,
  PRIMARY KEY("devID" AUTOINCREMENT),
  FOREIGN KEY("bugID") REFERENCES "Bug"("bugID")
);
CREATE TABLE "BugAssignment" (
  "assignmentID" INTEGER NOT NULL UNIQUE,
  "bugID" INTEGER NOT NULL,
  "devID" INTEGER NOT NULL,
  "devName" TEXT NOT NULL,
  PRIMARY KEY("assignmentID" AUTOINCREMENT),
  FOREIGN KEY("bugID") REFERENCES "Bug"("bugID"),
  FOREIGN KEY("devID") REFERENCES "Developer"("devID"),
  FOREIGN KEY("devName") REFERENCES "Developer"("devName")
);
