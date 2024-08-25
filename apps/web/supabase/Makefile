include .env


login:
	npx supabase login

init:
	npx supabase init

sync-types:
	cp ../src/sections/shared/supabase/types/database.ts ../supabase/functions/types/database.types.ts

create-edge-function:
	 npx supabase functions new ${name}

get-types:
	npx supabase gen types --project-id ${SUPABASE_PROJECT_ID} > ../src/sections/shared/supabase/types/database.types.ts
