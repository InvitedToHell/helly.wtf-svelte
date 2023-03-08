import { supabase } from "$lib/server/supabaseclient";

export const load: any = async () => {
    const {data} = await supabase.from("links").select("*");
    return {
        links: data
    }
};