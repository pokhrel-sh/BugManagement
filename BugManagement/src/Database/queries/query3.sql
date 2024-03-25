-- Query 3: This query returns the number of bugs per project.
-- Uses group by and having clause

SELECT projectName, COUNT(*) AS bugCount
FROM Bug
GROUP BY projectName
HAVING COUNT(*) > 5;


-- Expected Output:

-- Alpha	78\
-- Andalax	97
-- Bigtax	98
-- Domainer	97
-- Home Ing	115
-- Otcom	104
-- Rando	118
-- Sonair	99
-- Transcof	105
-- Viva	89