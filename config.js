// Configuración pública de la agenda. Estos dos valores NO son secretos: están pensados para el navegador.
// La seguridad la dan las reglas (RLS) de la base de datos. Cópielos desde Supabase › Project Settings › API.
window.ALBA_CONFIG = {
  supabaseUrl: 'https://xocgxknciwjmohljgcaw.supabase.co',
  supabaseKey: 'sb_publishable_-NG66JWoBp0lYNB42ShUcw_0J3ljGPp',        // «Publishable key» (sb_publishable_…) o «anon key». Nunca use la service_role aquí.
  telegramBot: 'alba_studiobol_bot'               // usuario del bot en Telegram, sin @ (solo se muestra al vincular)
};
