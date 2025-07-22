import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ADMIN_UMBRIEL_API_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    
    const response = await fetch(ADMIN_UMBRIEL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw error(response.status, `GraphQL API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GraphQL proxy error:', err);
    throw error(500, 'Internal server error');
  }
}; 