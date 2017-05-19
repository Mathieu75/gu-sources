import { Http } from '@angular/http';
export abstract class SheetAbstractService {

    private cachedData: Promise<any>;

    constructor(protected http: Http, private code: string, private filter = false, private defaultPage: number = 1, private cache = true) {
        if (this.cache) {
            this.cachedData = this.getPage();
        }

    }

    private getUrl(page = this.defaultPage): string {
        // lien vers le document : https://docs.google.com/spreadsheets/d/CODE/edit?usp=sharing
        return `https://spreadsheets.google.com/feeds/list/${this.code}/${page}/public/values?alt=json`;
    }

    getAll(): Promise<any> {
        if (this.cache) {
            return this.cachedData;
        }
        return this.getPage();
    }

    private getPage(page = this.defaultPage) {
        return this.http.get(this.getUrl(page))
            .map(res => res.json().feed.entry)
            .map(res => this.filter ? res.filter(elmt => elmt.gsx$pending.$t === 'FALSE') : res)
            .toPromise();
    }
}
