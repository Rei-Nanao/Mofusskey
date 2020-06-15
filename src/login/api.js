import {
    App,
    AuthSessoin
} from 'corekey';

async function login(host){
    const app = await App.create(
        'host',
        'Mofusskey',
        'Electron Client For Misskey',
        ['read:account', 'write:account', 'read:blocks', 'write:blocks', 'read:drive', 'write:drive', 'read:favorites', 'write:favorites', 'read:following', 'write:following', 'read:messaging', 'write:messaging', 'read:mutes', 'write:mutes', 'write:notes', 'read:notifications', 'write:notifications', 'read:reactions', 'write:reactions', 'write:votes', 'read:pages', 'write:pages', 'write:page-likes', 'read:page-likes', 'read:user-groups', 'write:user-groups']
    );

    const session = await AuthSession.generate(app);
    console.log('open in your browser: ', session.url);

    const account = await session.waitForAuth();
};

login("mk.iaia.moe");