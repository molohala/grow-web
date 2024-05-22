export {};

declare global {
    export interface Date {
        timeAgo(): string;
        monthPerDay(): string;
    }

    interface DateConstructor {
        datesForWeek(): Date[];
    }
}

Date.prototype.timeAgo = function(): string {
    const now = new Date();
    const years = now.getFullYear() - this.getFullYear();
    if (years > 0) {
        return `${years}년 전`;
    }

    const months = (now.getFullYear() - this.getFullYear()) * 12 + (now.getMonth() - this.getMonth());
    if (months > 0) {
        return `${months}개월 전`;
    }

    const days = Math.floor((now.getTime() - this.getTime()) / (1000 * 60 * 60 * 24));
    if (days > 0) {
        return `${days}일 전`;
    }

    const hours = Math.floor((now.getTime() - this.getTime()) / (1000 * 60 * 60));
    if (hours > 0) {
        return `${hours}시간 전`;
    }

    const minutes = Math.floor((now.getTime() - this.getTime()) / (1000 * 60));
    if (minutes > 0) {
        return `${minutes}분 전`;
    }

    return "방금 전";
}