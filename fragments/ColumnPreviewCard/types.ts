export type ColumnPreviewCardItem = {
    icon: string;
    title: string;
    description: string;
    colors: {
        text: string;
        background: string;
    };
    rounded?: {
        mobile: string;
        desktop: string;
    }
}
