export interface AuthSignUpProps {
  email: string
  password: string
  displayName: string
}

export interface PlaylistData {
  coverUrl: string
  createdAt: string
  description: string
  filePath: string
  songs: string[]
  title: string
  userId: string
  userName: string
}

export interface PlaylistDataList extends PlaylistData {
  id: string
}
