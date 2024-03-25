-- Query 4: this query returns bugs with status completed and priority urgent
-- Uses complex search critieron
SELECT *
FROM Bug
WHERE statusName = 'Completed' AND priorityName = 'Urgent';


-- Expected Output:
-- First few lines of the output

-- 11	Oncorhynchus nerka	Rando	2/16/2024	2/28/2024	Svelte	Urgent	Completed
-- 17	Phaethon aethereus	Sonair	2/20/2024	2/22/2024	Next JS	Urgent	Completed
-- 24	Chlidonias leucopterus	Viva	2/16/2024	2/29/2024	Angular	Urgent	Completed
-- 27	Cercatetus concinnus	Rando	2/14/2024	2/22/2024	React	Urgent	Completed