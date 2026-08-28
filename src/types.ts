export interface ConstellationMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  caption: string;
  x: number;
  y: number;
}

export interface AlbumPhoto {
  id: string;
  imageUrl: string;
  label: string;
  caption: string;
  rotation?: number;
}

export interface MemoryWallPhoto {
  id: string;
  imageUrl: string;
  caption: string;
  tilt: number;
  pinType: 'clip' | 'tape' | 'frame';
}

export interface LittleSmileItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  tag: string;
}

export interface WishTagItem {
  id: string;
  wish: string;
  subtitle: string;
  iconName: string;
}

export interface FamilyAlbumData {
  title: string;
  subtitle: string;
  rakhiPhotos: {
    sisterImg: string;
    brotherImg: string;
  };
  constellation: ConstellationMember[];
  albumPages: AlbumPhoto[][];
  wallPhotos: MemoryWallPhoto[];
  thenAndNow: {
    beforeImg: string;
    afterImg: string;
    beforeLabel: string;
    afterLabel: string;
  };
  littleSmiles: LittleSmileItem[];
  mosaicPhotos: { id: string; url: string; title: string }[];
  wishTags: WishTagItem[];
  finalPhoto: {
    url: string;
    title: string;
    subText: string;
  };
}

// Backwards-compatible utility types
export interface MemoryItem {
  id: string;
  title: string;
  caption: string;
  year?: string;
  era?: string;
  url: string;
  imageUrl?: string;
  note?: string;
}

export type VintagePhoto = MemoryItem;

export interface TimelineStage {
  id: string;
  stageName: string;
  subtitle: string;
  period: string;
  iconName: string;
  message: string;
  reflection: string;
  imageHint: string;
}

export interface BlessingItem {
  id: string;
  senderName: string;
  relation: string;
  message: string;
  date: string;
}

export interface PersonalMessageData {
  sisterName: string;
  brotherName: string;
  letterBody: string;
  closing: string;
  customNote?: string;
}

export interface FamilyPhotoData {
  url: string;
  imageUrl?: string;
  title?: string;
  caption: string;
  quote?: string;
  note?: string;
  familyMembers?: string;
  year?: string;
}
