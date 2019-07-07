window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceworker.js')
            .then(async (registration) => {
const permission = await window.Notification.requestPermission();
if(permission !=='granted'){
throw new Error('Permission not genrate for notification')

}
                const title = 'Simple Title';
                const options = {
                    body: 'Simple piece of body text.\nSecond line of body text :)'
                };
                registration.showNotification(title, options);
                console.log('service worker register')
            })
    }
})