import { maskEmailAddress } from '../src/mask-email-address';

describe('Mask email address', () => {
    it('mask long email address', () => {
        expect(maskEmailAddress('steve.jobs@apple.com')).toEqual('st***.****bs@a****e.com');
    });

    it('mask short email address', () => {
        expect(maskEmailAddress('ab@cd.com')).toEqual('**@**.com');
        expect(maskEmailAddress('b@c.com')).toEqual('*@*.com');
    });

    it('mask undefined email address', () => {
        expect(maskEmailAddress(undefined)).toBeUndefined();
    });
});
