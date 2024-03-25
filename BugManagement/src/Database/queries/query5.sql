-- Query 5: this query returns the priority level of each bug
-- Uses CASE statement

SELECT bugID, description,
      CASE
          WHEN Priority.priorityName = 'Not Important' THEN 'Low Priority'
          WHEN Priority.priorityName = 'Semi Important' THEN 'Medium Priority'
          WHEN Priority.priorityName = 'Important' THEN 'High Priority'
          WHEN Priority.priorityName = 'Urgent' THEN 'Super High Priority'

          ELSE 'Unknown'
      END AS priorityLevel
FROM Bug
JOIN Priority ON Bug.priorityName = Priority.priorityName;

-- Expected Output:
-- First few lines of the output

-- 1	Cygnus buccinator	Super High Priority
-- 2	Nasua nasua	High Priority
-- 3	Gyps bengalensis	Low Priority