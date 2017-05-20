export class Candidat {
    id?: string;
    nom?: string;
    prenom?: string;
    groupe?: string;
    circo?: string;
    picture?: string;
    edited?: string;
    pending?: string;
    links?: { id: number, texte: string, url: string }[];
}

const candidatBaseKeys: string[] = ['id', 'nom', 'prenom', 'groupe', 'circo', 'picture', 'edited', 'pending'];

export abstract class SheetCandidatConverter {

    private static c2sKey(key: string) {
        return `gsx$${key.replace(/_/g, '')}`;
    }

    static fromSheet(sheet: any): Candidat {
        const rslt: Candidat = {};
        candidatBaseKeys.forEach(key => {
            rslt[key] = sheet[this.c2sKey(key)].$t;
        });
        rslt.links = [];
        for (let i = 1; i < 12; i++) {
            if (sheet[`gsx$lienurl${i}`].$t) {
                rslt.links.push({
                    id: i,
                    url: sheet[`gsx$lienurl${i}`].$t,
                    texte: sheet[`gsx$lientext${i}`].$t
                });
            }
        }
        return rslt;
    }

    static toSheet(candidat: Candidat) {
        const sheet: any = {};
        candidatBaseKeys.forEach(key => {
            sheet[key] = candidat[key];
        });
        if (candidat.links) {
            candidat.links.forEach((link) => {
                sheet[`lien_text${link.id}`] = link.texte;
                sheet[`lien_url${link.id}`] = link.url;
            });
        }
        return sheet;
    }
}
