export interface Journal {
    name: string,
    description: string,
}

export interface Article {
    name: string,
    journal: Journal,
    title: string,
    abstract: string,
    content: string,
    author: string,
    last_update: string,
    tags: string,
    designation: string,
    disclosures: string,
    status: string,
    peer_reviewed: string,
    affiliation: string,
    external_funding: boolean
}

export interface ArticleName {
    title: string,
    content: string,
}