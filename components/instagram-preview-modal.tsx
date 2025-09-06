"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Plus } from "lucide-react"

interface InstagramPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  transformedText: string
  fontName: string
}

export function InstagramPreviewModal({ isOpen, onClose, transformedText, fontName }: InstagramPreviewModalProps) {
  const [activeTab, setActiveTab] = useState("bio")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-lg">📱</span>
            Anteprima Instagram - {fontName}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="post">Post</TabsTrigger>
            <TabsTrigger value="story">Storia</TabsTrigger>
          </TabsList>

          <TabsContent value="bio" className="space-y-4">
            <Card className="p-0 overflow-hidden bg-white text-black">
              {/* Instagram Profile Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                        👤
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-sm">il_tuo_profilo</h3>
                      <Badge variant="secondary" className="text-xs bg-blue-500 text-white">
                        Verificato
                      </Badge>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <span>
                        <strong>1,234</strong> post
                      </span>
                      <span>
                        <strong>12.5K</strong> follower
                      </span>
                      <span>
                        <strong>567</strong> seguiti
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Section with Preview */}
              <div className="p-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Il Tuo Nome</h4>
                  <div className="text-sm leading-relaxed">
                    <div className="mb-2">Creatore di contenuti ✨</div>
                    <div className="font-medium text-base break-all">{transformedText}</div>
                    <div className="mt-2 text-blue-900">🔗 linktr.ee/tuoprofilo</div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                    Segui
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Messaggio
                  </Button>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Story Highlights */}
              <div className="px-4 pb-4">
                <div className="flex gap-4 overflow-x-auto">
                  {["Highlights", "Viaggi", "Food", "Style"].map((highlight) => (
                    <div key={highlight} className="flex flex-col items-center gap-1 min-w-0">
                      <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-xs">📸</span>
                      </div>
                      <span className="text-xs text-center truncate w-16">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="post" className="space-y-4">
            <Card className="p-0 overflow-hidden bg-white text-black">
              {/* Post Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                        👤
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">il_tuo_profilo</div>
                    <div className="text-xs text-gray-500">Milano, Italia</div>
                  </div>
                </div>
                <MoreHorizontal className="h-5 w-5" />
              </div>

              {/* Post Image */}
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">📸</div>
                  <div className="text-sm text-gray-600">La tua foto qui</div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart className="h-6 w-6" />
                    <MessageCircle className="h-6 w-6" />
                    <Send className="h-6 w-6" />
                  </div>
                  <Bookmark className="h-6 w-6" />
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-sm">1,234 Mi piace</div>
                  <div className="text-sm">
                    <span className="font-semibold">il_tuo_profilo</span>{" "}
                    <span className="break-all">{transformedText}</span>
                  </div>
                  <div className="text-xs text-gray-500">Visualizza tutti i 23 commenti</div>
                  <div className="text-xs text-gray-500">2 ore fa</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="story" className="space-y-4">
            <Card className="p-0 overflow-hidden bg-black text-white relative aspect-[9/16] max-h-96">
              {/* Story Header */}
              <div className="absolute top-0 left-0 right-0 p-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-black">
                          👤
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">il_tuo_profilo</span>
                    <span className="text-xs text-gray-300">2h</span>
                  </div>
                  <MoreHorizontal className="h-5 w-5" />
                </div>
                {/* Progress bar */}
                <div className="w-full h-0.5 bg-gray-600 mt-3">
                  <div className="w-1/3 h-full bg-white"></div>
                </div>
              </div>

              {/* Story Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-4 break-all leading-tight">{transformedText}</div>
                  <div className="text-sm opacity-80">✨ Font speciale per Instagram ✨</div>
                </div>
              </div>

              {/* Story Bottom Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart className="h-6 w-6" />
                    <MessageCircle className="h-6 w-6" />
                    <Send className="h-6 w-6" />
                  </div>
                  <Bookmark className="h-6 w-6" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex gap-2 pt-4">
          <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
            Chiudi
          </Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(transformedText)
              onClose()
            }}
            className="flex-1"
          >
            Copia e Usa
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
