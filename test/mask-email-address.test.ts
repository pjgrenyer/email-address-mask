import { maskEmailAddress } from '../src/mask-email-address';

describe('Mask email address', () => {
    it('mask long email address', () => {
        expect(maskEmailAddress('steve.jobs@apple.com')).toEqual('st***.****bs@a****e.com');
        expect(maskEmailAddress('kate.beckinsale@underworld.com')).toEqual('ka**.**********le@un********ld.com');
    });

    it('mask short email address', () => {
        expect(maskEmailAddress('abcd@efgh.com')).toEqual('****@****.com');
        expect(maskEmailAddress('ab@cd.com')).toEqual('**@**.com');
        expect(maskEmailAddress('a@b.com')).toEqual('*@*.com');
    });

    it('mask undefined email address', () => {
        expect(maskEmailAddress(undefined)).toBeUndefined();
    });
});
