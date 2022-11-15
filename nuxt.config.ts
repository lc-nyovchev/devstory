export default defineNuxtConfig({
    vite: {
        server: {
            headers: {
                'Cross-Origin-Resource-Policy': 'same-site',
                'Cross-Origin-Embedder-Policy': 'require-corp',
                'Cross-Origin-Opener-Policy': 'same-origin'
            } 
        }
    }    
})
    