-- Query 2: This query returns the bug assigned to developers with their details.
-- Uses subquery

SELECT Bug.bugID, Bug.description, Bug.projectName, Developer.devName
FROM Bug
JOIN BugAssignment ON Bug.bugID = BugAssignment.bugID
JOIN Developer ON BugAssignment.devID = Developer.devID
WHERE Developer.devID IN (SELECT devID FROM Developer WHERE devName = 'Pavel Crippin');

-- Expected Output:

-- bugID	description	projectName	devName
-- 10	Larus fuliginosus	Viva	Pavel Crippin