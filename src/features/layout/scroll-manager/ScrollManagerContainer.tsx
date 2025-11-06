'use client';
import useScrollRestoration from '@/hooks/useScrollRestoration';

/**
 * Wrapper component that activates the scroll hook.
 * Must be a Client Component.
 */
const ScrollManager = (): null => {
    useScrollRestoration(); 
    return null;
}

export default ScrollManager;
