import { Http } from '@angular/http';
export abstract class SheetAbstractService<T> {

    private cachedData: Promise<T[]>;

    constructor(
        protected http: Http,
        private code: string,
        private converter: any = { fromSheet: (elmt) => elmt },
        private filter = false,
        private defaultPage: number = 1,
        private cache = true) {
        if (this.cache) {
            this.cachedData = this.getPage();
        }

    }

    protected toUrlEncoded(data): string {
        return Object.keys(data).reduce((acc, key) => `${acc}&${key}=${data[key]}`, '').substr(1);
    }

    private getUrl(page = this.defaultPage): string {
        // lien vers le document : https://docs.google.com/spreadsheets/d/CODE/edit?usp=sharing
        return `https://spreadsheets.google.com/feeds/list/${this.code}/${page}/public/values?alt=json`;
    }

    getAll(): Promise<T[]> {
        if (this.cache) {
            return this.cachedData;
        }
        return this.getPage();
    }

    private getPage(page = this.defaultPage): Promise<T[]> {
        return this.http.get(this.getUrl(page))
            .map(res => res.json().feed.entry)
            .map(res => {
                return res.map(elmt => this.converter.fromSheet(elmt));
            })
            .map(res => {
                return this.filter ? res.filter(elmt => elmt.pending === 'FALSE') : res;
            })
            .toPromise();
    }
}
