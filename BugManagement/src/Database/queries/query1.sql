--Query 1: This query returns the description, project name, submission date, date opened, framework name, priority name, and status name of all bugs.
--Uses join statement

SELECT Bug.bugID, Bug.description, Bug.projectName, Bug.submissionDate, Bug.dateOpened, Framework.frameworkName, Priority.priorityName, Status.statusName
FROM Bug
JOIN Framework ON Bug.frameworkName = Framework.frameworkName
JOIN Priority ON Bug.priorityName = Priority.priorityName
JOIN Status ON Bug.statusName = Status.statusName;

--Expected Output:
-- given first few lines
-- 1	Cygnus buccinator	Rando	2/15/2024	2/28/2024	React	Urgent	Not Started
-- 2	Nasua nasua	Alpha	2/20/2024	2/23/2024	Angular	Important	On Going

