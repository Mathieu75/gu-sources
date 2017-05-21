import { accentFold } from 'app/shared/accent-folding';

export abstract class SearchUtil {
    static nonSensitiveTest(pattern: string, elmt: any, key: string) {
        return accentFold(elmt[key]).toUpperCase().includes(accentFold(pattern).toUpperCase());
    }
}