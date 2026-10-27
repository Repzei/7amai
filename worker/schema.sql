-- Anonym besøgsstatistik for 7am AI (D1-database "7amai-stats", EU).
-- Én række pr. besøg uden noget om personen: ingen IP, ingen user agent, ingen cookies,
-- intet klokkeslæt (kun dato), så rækker ikke kan kobles til en person.
-- Anvend: npx.cmd wrangler d1 execute 7amai-stats --remote --file schema.sql
CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY,
  day TEXT NOT NULL,        -- YYYY-MM-DD, dansk tid
  path TEXT NOT NULL,       -- fx /2026/10/13/ eller /da/
  lang TEXT NOT NULL,       -- en | da
  src TEXT NOT NULL,        -- mail | bluesky | threads | search | social | other | direct | internal
  seconds INTEGER NOT NULL, -- aktiv tid med siden synlig, 0-1800
  scroll INTEGER NOT NULL   -- længst scrollet, 0-100 %
);
CREATE INDEX IF NOT EXISTS idx_visits_day ON visits(day);
CREATE INDEX IF NOT EXISTS idx_visits_path ON visits(path);
