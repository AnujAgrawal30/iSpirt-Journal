export interface Journal {
    name: string,
    description: string,
}

export interface Article {
    id: number,
    name: string,
    journal: Journal,
    title: string,
    abstract_html: string,
    content_html: string,
    author: string,
    last_update: Date,
    tags: string,
    designation: string,
    disclosures: string,
    status: string,
    peer_reviewed: string,
    affiliation: string,
    external_funding: boolean
}

export interface ArticleName {
    id: number,
    name: string,
    title: string,
    author: string,
    tags: string,
}