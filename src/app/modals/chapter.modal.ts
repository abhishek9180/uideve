export interface Chapter {
    chapter_no: number;
    chapter_name: string;
    /* status: P-PASS, F-FAIL, PR-PROGRESS, N-NOT STARTED */
    status: string;
    score: number;
    total: number;
}