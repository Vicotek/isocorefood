import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/supabaseConfig.js';

// Supabase Configuration - Ahora con credenciales reales
export const API_URL = `${SUPABASE_URL}/rest/v1`;
export const AUTH_HEADER = {
  'apikey': SUPABASE_ANON_KEY,
  'Content-Type': 'application/json'
};

let supabaseClient = null;

/**
 * Obtener plan del usuario desde Supabase usando REST API
 * @param {string} email - Email del usuario
 * @returns {Promise<string|null>} - Plan: 'free', 'premium', 'vip' o null
 */
export async function getUserPlanFromSupabase(email) {
  if (!email) return null;

  try {
    console.log(`📊 Obteniendo plan desde Supabase para: ${email}`);
    
    // Consultar la tabla usuarios
    // SELECT plan FROM usuarios WHERE email = ?
    const response = await fetch(
      `${API_URL}/usuarios?email=eq.${encodeURIComponent(email)}&select=plan`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.warn(`⚠️ Error de Supabase (${response.status}):`, await response.text());
      return null;
    }

    const data = await response.json();
    
    if (data && data.length > 0) {
      let plan = data[0].plan;
      
      // Mapear valores de Supabase a valores internos
      if (plan === 'gratis') plan = 'free';
      
      console.log(`✅ Plan obtenido desde Supabase: ${plan}`);
      return plan;
    }

    console.log('ℹ️ Usuario no encontrado en usuarios');
    return null;
  } catch (error) {
    console.error('❌ Error obteniendo plan de Supabase:', error);
    return null;
  }
}

/**
 * Actualizar plan del usuario en Supabase
 * @param {string} userId - ID del usuario
 * @param {string} plan - Nuevo plan
 * @returns {Promise<boolean>} - true si se actualizó correctamente
 */
export async function updateUserPlanInSupabase(userId, plan) {
  if (!userId || !plan) return false;

  try {
    console.log(`📝 Actualizando plan en Supabase: ${userId} → ${plan}`);
    
    const response = await fetch(
      `${API_URL}/profiles?id=eq.${userId}`,
      {
        method: 'PATCH',
        headers: AUTH_HEADER,
        body: JSON.stringify({ plan })
      }
    );

    if (!response.ok) {
      console.error(`❌ Error actualizando plan (${response.status}):`, await response.text());
      return false;
    }

    console.log(`✅ Plan actualizado correctamente en Supabase`);
    return true;
  } catch (error) {
    console.error('❌ Error actualizando plan:', error);
    return false;
  }
}

/**
 * Obtener usuario completo desde Supabase
 * @param {string} email - Email del usuario
 * @returns {Promise<Object|null>} - Objeto de usuario o null
 */
export async function getUserFromSupabase(email) {
  if (!email) return null;

  try {
    const response = await fetch(
      `${API_URL}/usuarios?email=eq.${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error obteniendo usuario:', error);
    return null;
  }
}

/**
 * Actualizar plan del usuario en tabla usuarios
 * @param {string} email - Email del usuario
 * @param {string} plan - Nuevo plan
 * @returns {Promise<boolean>}
 */
export async function createOrUpdateUserInSupabase(userData) {
  if (!userData.email) return false;

  try {
    // Mapear plan de valores internos a Supabase
    let supabasePlan = userData.plan || 'gratis';
    if (supabasePlan === 'free') supabasePlan = 'gratis';

    const response = await fetch(
      `${API_URL}/usuarios?email=eq.${encodeURIComponent(userData.email)}`,
      {
        method: 'PATCH',
        headers: AUTH_HEADER,
        body: JSON.stringify({
          nombre: userData.name || userData.nombre || '',
          plan: supabasePlan,
          idioma: userData.language || 'es'
        })
      }
    );

    if (!response.ok) {
      console.warn(`⚠️ Error actualizando usuario (${response.status}):`, await response.text());
      return false;
    }

    console.log('✅ Usuario actualizado en Supabase');
    return true;
  } catch (error) {
    console.error('Error actualizando usuario:', error);
    return false;
  }
}

/**
 * Escuchar cambios en tiempo real del plan del usuario (Usando polling)
 * @param {string} email - Email del usuario
 * @param {Function} callback - Función que se ejecuta cuando cambia el plan
 * @returns {Function} - Función para detener el polling
 */
export function subscribeToUserPlan(email, callback) {
  if (!email || !callback) return null;

  let lastPlan = null;
  const pollInterval = 5000; // Consultar cada 5 segundos

  const interval = setInterval(async () => {
    try {
      const plan = await getUserPlanFromSupabase(email);
      
      if (plan && plan !== lastPlan) {
        lastPlan = plan;
        console.log(`🔔 Plan actualizado detectado: ${plan}`);
        callback(plan);
      }
    } catch (error) {
      console.error('Error en polling de plan:', error);
    }
  }, pollInterval);

  // Retornar función para detener el polling
  return () => clearInterval(interval);
}

/**
 * Obtener actividad reciente del usuario
 * @param {string} email - Email del usuario
 * @param {number} limit - Número de registros a obtener
 * @returns {Promise<Array|null>} - Array de actividad reciente
 */
export async function getRecentActivityFromSupabase(email, limit = 10) {
  if (!email) return null;

  try {
    console.log(`📊 Obteniendo actividad reciente para: ${email}`);
    
    const response = await fetch(
      `${API_URL}/user_activity?email=eq.${encodeURIComponent(email)}&order=created_at.desc&limit=${limit}`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.warn(`⚠️ Error obteniendo actividad (${response.status})`);
      return null;
    }

    const data = await response.json();
    console.log(`✅ ${data?.length || 0} registros de actividad obtenidos`);
    return data || [];
  } catch (error) {
    console.error('Error obteniendo actividad reciente:', error);
    return null;
  }
}

/**
 * Obtener favoritos/recursos guardados del usuario
 * @param {string} email - Email del usuario
 * @returns {Promise<Array|null>} - Array de favoritos
 */
export async function getFavoritesFromSupabase(email) {
  if (!email) return null;

  try {
    console.log(`💾 Obteniendo favoritos para: ${email}`);
    
    const response = await fetch(
      `${API_URL}/favorites?email=eq.${encodeURIComponent(email)}&order=created_at.desc`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.warn(`⚠️ Error obteniendo favoritos (${response.status})`);
      return null;
    }

    const data = await response.json();
    console.log(`✅ ${data?.length || 0} favoritos obtenidos`);
    return data || [];
  } catch (error) {
    console.error('Error obteniendo favoritos:', error);
    return null;
  }
}

/**
 * Guardar nueva actividad del usuario
 * @param {string} email - Email del usuario
 * @param {Object} activity - Datos de actividad
 * @returns {Promise<boolean>} - true si se guardó correctamente
 */
export async function saveActivityToSupabase(email, activity) {
  if (!email || !activity) return false;

  try {
    console.log(`📝 Guardando actividad:`, activity.type);
    
    const activityData = {
      email: email,
      type: activity.type,
      resource_name: activity.resourceName || activity.name || 'sin nombre',
      resource_id: activity.resourceId || null,
      action: activity.action || 'view',
      metadata: activity.metadata || {},
      created_at: new Date().toISOString()
    };

    const response = await fetch(
      `${API_URL}/user_activity`,
      {
        method: 'POST',
        headers: AUTH_HEADER,
        body: JSON.stringify(activityData)
      }
    );

    if (!response.ok) {
      console.error(`❌ Error guardando actividad (${response.status})`);
      return false;
    }

    console.log(`✅ Actividad guardada`);
    return true;
  } catch (error) {
    console.error('Error guardando actividad:', error);
    return false;
  }
}

/**
 * Guardar favorito
 * @param {string} email - Email del usuario
 * @param {Object} favorite - Datos del favorito
 * @returns {Promise<boolean>} - true si se guardó correctamente
 */
export async function saveFavoriteToSupabase(email, favorite) {
  if (!email || !favorite) return false;

  try {
    console.log(`💾 Guardando favorito:`, favorite.type);
    
    const favoriteData = {
      email: email,
      type: favorite.type, // 'recipe', 'resource', 'supplement'
      name: favorite.name || 'sin nombre',
      resource_id: favorite.resourceId || null,
      url: favorite.url || null,
      metadata: favorite.metadata || {},
      created_at: new Date().toISOString()
    };

    const response = await fetch(
      `${API_URL}/favorites`,
      {
        method: 'POST',
        headers: AUTH_HEADER,
        body: JSON.stringify(favoriteData)
      }
    );

    if (!response.ok) {
      console.error(`❌ Error guardando favorito (${response.status})`);
      return false;
    }

    console.log(`✅ Favorito guardado`);
    return true;
  } catch (error) {
    console.error('Error guardando favorito:', error);
    return false;
  }
}

/**
 * Obtener todos los artículos publicados desde Supabase
 * @param {number} limit - Límite de resultados
 * @param {number} offset - Offset para paginación
 * @returns {Promise<Array>} - Array de artículos
 */
export async function getArticlesFromSupabase(limit = 999, offset = 0) {
  try {
    console.log('📚 Obteniendo artículos desde Supabase...');
    
    const response = await fetch(
      `${API_URL}/articles?limit=${limit}&offset=${offset}&status=published`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.error(`❌ Error obteniendo artículos (${response.status})`);
      return [];
    }

    const data = await response.json();
    console.log(`✅ ${data.length || 0} artículos obtenidos`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error obteniendo artículos:', error);
    return [];
  }
}

/**
 * Obtener un artículo específico por ID
 * @param {string} articleId - ID del artículo
 * @returns {Promise<Object|null>} - Objeto del artículo o null
 */
export async function getArticleFromSupabase(articleId) {
  try {
    const response = await fetch(
      `${API_URL}/articles/${articleId}`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.error(`❌ Error obteniendo artículo ${articleId}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error obteniendo artículo:', error);
    return null;
  }
}

/**
 * Buscar artículos por query de búsqueda
 * @param {string} query - Término de búsqueda
 * @returns {Promise<Array>} - Array de artículos que coinciden
 */
export async function searchArticlesInSupabase(query) {
  try {
    if (!query || query.length < 2) return [];

    const response = await fetch(
      `${API_URL}/articles/search?q=${encodeURIComponent(query)}`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.error(`❌ Error buscando artículos`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error buscando artículos:', error);
    return [];
  }
}

/**
 * Obtener artículos por categoría
 * @param {string} category - Nombre de la categoría
 * @returns {Promise<Array>} - Array de artículos en la categoría
 */
export async function getArticlesByCategoryFromSupabase(category) {
  try {
    const response = await fetch(
      `${API_URL}/articles/category/${encodeURIComponent(category)}?status=published`,
      {
        method: 'GET',
        headers: AUTH_HEADER
      }
    );

    if (!response.ok) {
      console.error(`❌ Error obteniendo artículos por categoría`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error obteniendo artículos por categoría:', error);
    return [];
  }
}
