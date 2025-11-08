interface Asset {
  sys: { id: string };
  url?: string;
}

interface ContentLinks {
  assets?: { block?: Asset[] };
}

export const createAssetGetter = (links?: ContentLinks) => {
  return (assetId: string): string | null => {
    if (!links?.assets?.block) return null;

    const asset = links.assets.block.find((asset) => asset.sys.id === assetId);

    return asset?.url ?? null;
  };
};
