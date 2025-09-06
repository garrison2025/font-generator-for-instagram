"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Heart, Eye, Shuffle, Search, Filter, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { InstagramPreviewModal } from "@/components/instagram-preview-modal"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Font styles with categories
const fontStyles = [
  // Eleganti (15 fonts)
  {
    name: "Corsivo Elegante",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const elegantMap: { [key: string]: string } = {
          a: "𝒶",
          b: "𝒷",
          c: "𝒸",
          d: "𝒹",
          e: "ℯ",
          f: "𝒻",
          g: "ℊ",
          h: "ℎ",
          i: "𝒾",
          j: "𝒿",
          k: "𝓀",
          l: "𝓁",
          m: "𝓂",
          n: "𝓃",
          o: "ℴ",
          p: "𝓅",
          q: "𝓆",
          r: "𝓇",
          s: "𝓈",
          t: "𝓉",
          u: "𝓊",
          v: "𝓋",
          w: "𝓌",
          x: "𝓍",
          y: "𝓎",
          z: "𝓏",
          A: "𝒜",
          B: "ℬ",
          C: "𝒞",
          D: "𝒟",
          E: "ℰ",
          F: "ℱ",
          G: "𝒢",
          H: "ℋ",
          I: "ℐ",
          J: "𝒥",
          K: "𝒦",
          L: "ℒ",
          M: "ℳ",
          N: "𝒩",
          O: "𝒪",
          P: "𝒫",
          Q: "𝒬",
          R: "ℛ",
          S: "𝒮",
          T: "𝒯",
          U: "𝒰",
          V: "𝒱",
          W: "𝒲",
          X: "𝒳",
          Y: "𝒴",
          Z: "𝒵",
        }
        return elegantMap[char] || char
      }),
  },
  {
    name: "Grassetto Elegante",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const boldMap: { [key: string]: string } = {
          a: "𝐚",
          b: "𝐛",
          c: "𝐜",
          d: "𝐝",
          e: "𝐞",
          f: "𝐟",
          g: "𝐠",
          h: "𝐡",
          i: "𝐢",
          j: "𝐣",
          k: "𝐤",
          l: "𝐥",
          m: "𝐦",
          n: "𝐧",
          o: "𝐨",
          p: "𝐩",
          q: "𝐪",
          r: "𝐫",
          s: "𝐬",
          t: "𝐭",
          u: "𝐮",
          v: "𝐯",
          w: "𝐰",
          x: "𝐱",
          y: "𝐲",
          z: "𝐳",
          A: "𝐀",
          B: "𝐁",
          C: "𝐂",
          D: "𝐃",
          E: "𝐄",
          F: "𝐅",
          G: "𝐆",
          H: "𝐇",
          I: "𝐈",
          J: "𝐉",
          K: "𝐊",
          L: "𝐋",
          M: "𝐌",
          N: "𝐍",
          O: "𝐎",
          P: "𝐏",
          Q: "𝐐",
          R: "𝐑",
          S: "𝐒",
          T: "𝐓",
          U: "𝐔",
          V: "𝐕",
          W: "𝐖",
          X: "𝐗",
          Y: "𝒀",
          Z: "𝒁",
        }
        return boldMap[char] || char
      }),
  },
  {
    name: "Corsivo Grassetto",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const boldItalicMap: { [key: string]: string } = {
          a: "𝒂",
          b: "𝒃",
          c: "𝒄",
          d: "𝒅",
          e: "𝒆",
          f: "𝒇",
          g: "𝒈",
          h: "𝒉",
          i: "𝒊",
          j: "𝒋",
          k: "𝒌",
          l: "𝒍",
          m: "𝒎",
          n: "𝒏",
          o: "𝒐",
          p: "𝒑",
          q: "𝒒",
          r: "𝒓",
          s: "𝒔",
          t: "𝒕",
          u: "𝒖",
          v: "𝒗",
          w: "𝒘",
          x: "𝒙",
          y: "𝒚",
          z: "𝒛",
          A: "𝑨",
          B: "𝑩",
          C: "𝑪",
          D: "𝑫",
          E: "𝑬",
          F: "𝑭",
          G: "𝑮",
          H: "𝑯",
          I: "𝑰",
          J: "𝑱",
          K: "𝑲",
          L: "𝑳",
          M: "𝑴",
          N: "𝑵",
          O: "𝑶",
          P: "𝑷",
          Q: "𝑸",
          R: "𝑹",
          S: "𝑺",
          T: "𝑻",
          U: "𝑼",
          V: "𝑽",
          W: "𝑾",
          X: "𝑿",
          Y: "𝒀",
          Z: "𝒁",
        }
        return boldItalicMap[char] || char
      }),
  },
  {
    name: "Serif Elegante",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const serifMap: { [key: string]: string } = {
          a: "𝖺",
          b: "𝖻",
          c: "𝖼",
          d: "𝖽",
          e: "𝖾",
          f: "𝖿",
          g: "𝗀",
          h: "𝗁",
          i: "𝗂",
          j: "𝗃",
          k: "𝗄",
          l: "𝗅",
          m: "𝗆",
          n: "𝗇",
          o: "𝗈",
          p: "𝗉",
          q: "𝗊",
          r: "𝗋",
          s: "𝗌",
          t: "𝗍",
          u: "𝗎",
          v: "𝗏",
          w: "𝗐",
          x: "𝗑",
          y: "𝗒",
          z: "𝗓",
          A: "𝖠",
          B: "𝖡",
          C: "𝖢",
          D: "𝖣",
          E: "𝖤",
          F: "𝖥",
          G: "𝖦",
          H: "𝖧",
          I: "𝖨",
          J: "𝖩",
          K: "𝖪",
          L: "𝖫",
          M: "𝖬",
          N: "𝖭",
          O: "𝖮",
          P: "𝖯",
          Q: "𝖰",
          R: "𝖱",
          S: "𝖲",
          T: "𝖳",
          U: "𝖴",
          V: "𝖵",
          W: "𝖶",
          X: "𝖷",
          Y: "𝖸",
          Z: "𝖹",
        }
        return serifMap[char] || char
      }),
  },
  {
    name: "Doppio Sottolineato",
    category: "eleganti",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u0333")
        .join(""),
  },
  {
    name: "Sottolineato Elegante",
    category: "eleganti",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u0332")
        .join(""),
  },
  {
    name: "Barrato Elegante",
    category: "eleganti",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u0336")
        .join(""),
  },
  {
    name: "Sopralineato",
    category: "eleganti",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u0305")
        .join(""),
  },
  {
    name: "Corsivo Matematico",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const mathItalicMap: { [key: string]: string } = {
          a: "𝑎",
          b: "𝑏",
          c: "𝑐",
          d: "𝑑",
          e: "𝑒",
          f: "𝑓",
          g: "𝑔",
          h: "ℎ",
          i: "𝑖",
          j: "𝑗",
          k: "𝑘",
          l: "𝑙",
          m: "𝑚",
          n: "𝑛",
          o: "𝑜",
          p: "𝑝",
          q: "𝑞",
          r: "𝑟",
          s: "𝑠",
          t: "𝑡",
          u: "𝑢",
          v: "𝑣",
          w: "𝑤",
          x: "𝑥",
          y: "𝑦",
          z: "𝑧",
          A: "𝐴",
          B: "𝐵",
          C: "𝐶",
          D: "𝐷",
          E: "𝐸",
          F: "𝐹",
          G: "𝐺",
          H: "𝐻",
          I: "𝐼",
          J: "𝐽",
          K: "𝐾",
          L: "𝐿",
          M: "𝑀",
          N: "𝑁",
          O: "𝑂",
          P: "𝑃",
          Q: "𝑄",
          R: "𝑅",
          S: "𝑆",
          T: "𝑇",
          U: "𝑈",
          V: "𝑉",
          W: "𝑊",
          X: "𝑋",
          Y: "𝑌",
          Z: "𝑍",
        }
        return mathItalicMap[char] || char
      }),
  },
  {
    name: "Grassetto Matematico",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const mathBoldMap: { [key: string]: string } = {
          a: "𝐚",
          b: "𝐛",
          c: "𝐜",
          d: "𝐝",
          e: "𝐞",
          f: "𝐟",
          g: "𝐠",
          h: "𝐡",
          i: "𝐢",
          j: "𝐣",
          k: "𝐤",
          l: "𝐥",
          m: "𝐦",
          n: "𝐧",
          o: "𝐨",
          p: "𝐩",
          q: "𝐪",
          r: "𝐫",
          s: "𝐬",
          t: "𝐭",
          u: "𝐮",
          v: "𝐯",
          w: "𝐰",
          x: "𝐱",
          y: "𝐲",
          z: "𝐳",
          A: "𝐀",
          B: "𝐁",
          C: "𝐂",
          D: "𝐃",
          E: "𝐄",
          F: "𝐅",
          G: "𝐆",
          H: "𝐇",
          I: "𝐈",
          J: "𝐉",
          K: "𝐊",
          L: "𝐋",
          M: "𝐌",
          N: "𝐍",
          O: "𝐎",
          P: "𝐏",
          Q: "𝐐",
          R: "𝐑",
          S: "𝐒",
          T: "𝐓",
          U: "𝐔",
          V: "𝐕",
          W: "𝐖",
          X: "𝐗",
          Y: "𝒀",
          Z: "𝒁",
        }
        return mathBoldMap[char] || char
      }),
  },
  {
    name: "Piccole Maiuscole",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const smallCapsMap: { [key: string]: string } = {
          a: "ᴀ",
          b: "ʙ",
          c: "ᴄ",
          d: "ᴅ",
          e: "ᴇ",
          f: "ғ",
          g: "ɢ",
          h: "ʜ",
          i: "ɪ",
          j: "ᴊ",
          k: "ᴋ",
          l: "ʟ",
          m: "ᴍ",
          n: "ɴ",
          o: "ᴏ",
          p: "ᴘ",
          q: "ǫ",
          r: "ʀ",
          s: "s",
          t: "ᴛ",
          u: "ᴜ",
          v: "ᴠ",
          w: "ᴡ",
          x: "x",
          y: "ʏ",
          z: "ᴢ",
          A: "ᴀ",
          B: "ʙ",
          C: "ᴄ",
          D: "ᴅ",
          E: "ᴇ",
          F: "ғ",
          G: "ɢ",
          H: "ʜ",
          I: "ɪ",
          J: "ᴊ",
          K: "ᴋ",
          L: "ʟ",
          M: "ᴍ",
          N: "ɴ",
          O: "ᴏ",
          P: "ᴘ",
          Q: "ǫ",
          R: "ʀ",
          S: "s",
          T: "ᴛ",
          U: "ᴜ",
          V: "ᴠ",
          W: "ᴡ",
          X: "x",
          Y: "ʏ",
          Z: "ᴢ",
        }
        return smallCapsMap[char] || char
      }),
  },
  {
    name: "Doppio Barrato",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const doubleStruckMap: { [key: string]: string } = {
          a: "𝕒",
          b: "𝕓",
          c: "𝕔",
          d: "𝕕",
          e: "𝕖",
          f: "𝕗",
          g: "𝕘",
          h: "𝕙",
          i: "𝕚",
          j: "𝕛",
          k: "𝕜",
          l: "𝕝",
          m: "𝕞",
          n: "𝕟",
          o: "𝕠",
          p: "𝕡",
          q: "𝕢",
          r: "𝕣",
          s: "𝕤",
          t: "𝕥",
          u: "𝕦",
          v: "𝕧",
          w: "𝕨",
          x: "𝕩",
          y: "𝕪",
          z: "𝕫",
          A: "𝔸",
          B: "𝔹",
          C: "ℂ",
          D: "𝔻",
          E: "𝔼",
          F: "𝔽",
          G: "𝔾",
          H: "ℍ",
          I: "𝕀",
          J: "𝕁",
          K: "𝕂",
          L: "𝕃",
          M: "𝕄",
          N: "ℕ",
          O: "𝕆",
          P: "ℙ",
          Q: "ℚ",
          R: "ℝ",
          S: "𝕊",
          T: "𝕋",
          U: "𝕌",
          V: "𝕍",
          W: "𝕎",
          X: "𝕏",
          Y: "𝕐",
          Z: "ℤ",
        }
        return doubleStruckMap[char] || char
      }),
  },
  {
    name: "Serif Corsivo",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const serifItalicMap: { [key: string]: string } = {
          a: "𝑎",
          b: "𝑏",
          c: "𝑐",
          d: "𝑑",
          e: "𝑒",
          f: "𝑓",
          g: "𝑔",
          h: "ℎ",
          i: "𝑖",
          j: "𝑗",
          k: "𝑘",
          l: "𝑙",
          m: "𝑚",
          n: "𝑛",
          o: "𝑜",
          p: "𝑝",
          q: "𝑞",
          r: "𝑟",
          s: "𝑠",
          t: "𝑡",
          u: "𝑢",
          v: "𝑣",
          w: "𝑤",
          x: "𝑥",
          y: "𝑦",
          z: "𝑧",
          A: "𝐴",
          B: "𝐵",
          C: "𝐶",
          D: "𝐷",
          E: "𝐸",
          F: "𝐹",
          G: "𝐺",
          H: "𝐻",
          I: "𝐼",
          J: "𝐽",
          K: "𝐾",
          L: "𝐿",
          M: "𝑀",
          N: "𝑁",
          O: "𝑂",
          P: "𝑃",
          Q: "𝑄",
          R: "𝑅",
          S: "𝑆",
          T: "𝑇",
          U: "𝑈",
          V: "𝑉",
          W: "𝑊",
          X: "𝑋",
          Y: "𝑌",
          Z: "𝑍",
        }
        return serifItalicMap[char] || char
      }),
  },
  {
    name: "Serif Grassetto Corsivo",
    category: "eleganti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const serifBoldItalicMap: { [key: string]: string } = {
          a: "𝒂",
          b: "𝒃",
          c: "𝒄",
          d: "𝒅",
          e: "𝒆",
          f: "𝒇",
          g: "𝒈",
          h: "𝒉",
          i: "𝒊",
          j: "𝒋",
          k: "𝒌",
          l: "𝒍",
          m: "𝒎",
          n: "𝒏",
          o: "𝒐",
          p: "𝒑",
          q: "𝒒",
          r: "𝒓",
          s: "𝒔",
          t: "𝒕",
          u: "𝒖",
          v: "𝒗",
          w: "𝒘",
          x: "𝒙",
          y: "𝒚",
          z: "𝒛",
          A: "𝑨",
          B: "𝑩",
          C: "𝑪",
          D: "𝑫",
          E: "𝑬",
          F: "𝑭",
          G: "𝑮",
          H: "𝑯",
          I: "𝑰",
          J: "𝑱",
          K: "𝑲",
          L: "𝑳",
          M: "𝑴",
          N: "𝑵",
          O: "𝑶",
          P: "𝑷",
          Q: "𝑸",
          R: "𝑹",
          S: "𝑺",
          T: "𝑻",
          U: "𝑼",
          V: "𝑽",
          W: "𝑾",
          X: "𝑿",
          Y: "𝒀",
          Z: "𝒁",
        }
        return serifBoldItalicMap[char] || char
      }),
  },

  // Moderni (15 fonts)
  {
    name: "Sans Serif",
    category: "moderni",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const sansMap: { [key: string]: string } = {
          a: "𝖺",
          b: "𝖻",
          c: "𝖼",
          d: "𝖽",
          e: "𝖾",
          f: "𝖿",
          g: "𝗀",
          h: "𝗁",
          i: "𝗂",
          j: "𝗃",
          k: "𝗄",
          l: "𝗅",
          m: "𝗆",
          n: "𝗇",
          o: "𝗈",
          p: "𝗉",
          q: "𝗊",
          r: "𝗋",
          s: "𝗌",
          t: "𝗍",
          u: "𝗎",
          v: "𝗏",
          w: "𝗐",
          x: "𝗑",
          y: "𝗒",
          z: "𝗓",
          A: "𝖠",
          B: "𝖡",
          C: "𝖢",
          D: "𝖣",
          E: "𝖤",
          F: "𝖥",
          G: "𝖦",
          H: "𝖧",
          I: "𝖨",
          J: "𝖩",
          K: "𝖪",
          L: "𝖫",
          M: "𝖬",
          N: "𝖭",
          O: "𝖮",
          P: "𝖯",
          Q: "𝖰",
          R: "𝖱",
          S: "𝖲",
          T: "𝖳",
          U: "𝖴",
          V: "𝖵",
          W: "𝖶",
          X: "𝖷",
          Y: "𝖸",
          Z: "𝖹",
        }
        return sansMap[char] || char
      }),
  },
  {
    name: "Sans Serif Grassetto",
    category: "moderni",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const sansBoldMap: { [key: string]: string } = {
          a: "𝗮",
          b: "𝗯",
          c: "𝗰",
          d: "𝗱",
          e: "𝗲",
          f: "𝗳",
          g: "𝗴",
          h: "𝗵",
          i: "𝗶",
          j: "𝗷",
          k: "𝗸",
          l: "𝗹",
          m: "𝗺",
          n: "𝗻",
          o: "𝗼",
          p: "𝗽",
          q: "𝗾",
          r: "𝗿",
          s: "𝘀",
          t: "𝘁",
          u: "𝘂",
          v: "𝘃",
          w: "𝘄",
          x: "𝘅",
          y: "𝘺",
          z: "𝘇",
          A: "𝗔",
          B: "𝗕",
          C: "𝗖",
          D: "𝗗",
          E: "𝗘",
          F: "𝗙",
          G: "𝗚",
          H: "𝗛",
          I: "𝗜",
          J: "𝗝",
          K: "𝗞",
          L: "𝗟",
          M: "𝗠",
          N: "𝗡",
          O: "𝗢",
          P: "𝗣",
          Q: "𝗤",
          R: "𝗥",
          S: "𝗦",
          T: "𝗧",
          U: "𝗨",
          V: "𝗩",
          W: "𝗪",
          X: "𝗫",
          Y: "𝗬",
          Z: "𝗭",
        }
        return sansBoldMap[char] || char
      }),
  },
  {
    name: "Sans Serif Corsivo",
    category: "moderni",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const sansItalicMap: { [key: string]: string } = {
          a: "𝘢",
          b: "𝘣",
          c: "𝘤",
          d: "𝘥",
          e: "𝘦",
          f: "𝘧",
          g: "𝘨",
          h: "𝘩",
          i: "𝘪",
          j: "𝘫",
          k: "𝘬",
          l: "𝘭",
          m: "𝘮",
          n: "𝘯",
          o: "𝘰",
          p: "𝘱",
          q: "𝘲",
          r: "𝘳",
          s: "𝘴",
          t: "𝘵",
          u: "𝘶",
          v: "𝘷",
          w: "𝘸",
          x: "𝘹",
          y: "𝘺",
          z: "𝘻",
          A: "𝘈",
          B: "𝘉",
          C: "𝘊",
          D: "𝘋",
          E: "𝘌",
          F: "𝘍",
          G: "𝘎",
          H: "𝘏",
          I: "𝘐",
          J: "𝘑",
          K: "𝘒",
          L: "𝘓",
          M: "𝘔",
          N: "𝘕",
          O: "𝘖",
          P: "𝘗",
          Q: "𝘘",
          R: "𝘙",
          S: "𝘚",
          T: "𝘛",
          U: "𝘜",
          V: "𝘝",
          W: "𝘞",
          X: "𝘟",
          Y: "𝘠",
          Z: "𝘡",
        }
        return sansItalicMap[char] || char
      }),
  },
  {
    name: "Sans Serif Grassetto Corsivo",
    category: "moderni",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const sansBoldItalicMap: { [key: string]: string } = {
          a: "𝙖",
          b: "𝙗",
          c: "𝙘",
          d: "𝙙",
          e: "𝙚",
          f: "𝙛",
          g: "𝙜",
          h: "𝙝",
          i: "𝙞",
          j: "𝙟",
          k: "𝙠",
          l: "𝙡",
          m: "𝙢",
          n: "𝙣",
          o: "𝙤",
          p: "𝙥",
          q: "𝙦",
          r: "𝙧",
          s: "𝙨",
          t: "𝙩",
          u: "𝙪",
          v: "𝙫",
          w: "𝙬",
          x: "𝙭",
          y: "𝙮",
          z: "𝙯",
          A: "𝘼",
          B: "𝘽",
          C: "𝘾",
          D: "𝘿",
          E: "𝙀",
          F: "𝙁",
          G: "𝙂",
          H: "𝙃",
          I: "𝙄",
          J: "𝙅",
          K: "𝙆",
          L: "𝙇",
          M: "𝙈",
          N: "𝙉",
          O: "𝙊",
          P: "𝙋",
          Q: "𝙌",
          R: "𝙍",
          S: "𝙎",
          T: "𝙏",
          U: "𝚄",
          V: "𝙑",
          W: "𝙒",
          X: "𝙓",
          Y: "𝚈",
          Z: "𝙕",
        }
        return sansBoldItalicMap[char] || char
      }),
  },
  {
    name: "Monospace",
    category: "moderni",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const monoMap: { [key: string]: string } = {
          a: "𝚊",
          b: "𝚋",
          c: "𝚌",
          d: "𝚍",
          e: "𝚎",
          f: "𝚏",
          g: "𝚐",
          h: "𝚑",
          i: "𝚒",
          j: "𝚓",
          k: "𝚔",
          l: "𝚕",
          m: "𝚖",
          n: "𝚗",
          o: "𝚘",
          p: "𝚙",
          q: "𝚚",
          r: "𝚛",
          s: "𝚜",
          t: "𝚝",
          u: "𝚞",
          v: "𝚟",
          w: "𝚠",
          x: "𝚡",
          y: "𝚢",
          z: "𝚣",
          A: "𝙰",
          B: "𝙱",
          C: "𝙲",
          D: "𝙳",
          E: "𝙴",
          F: "𝙵",
          G: "𝙶",
          H: "𝙷",
          I: "𝙸",
          J: "𝙹",
          K: "𝙺",
          L: "𝙻",
          M: "𝙼",
          N: "𝙽",
          O: "𝙾",
          P: "𝙿",
          Q: "𝚀",
          R: "𝚁",
          S: "𝚂",
          T: "𝚃",
          U: "𝚄",
          V: "𝚅",
          W: "𝚆",
          X: "𝚇",
          Y: "𝚈",
          Z: "𝚉",
        }
        return monoMap[char] || char
      }),
  },
  {
    name: "Fullwidth",
    category: "moderni",
    transform: (text: string) =>
      text.replace(/[a-zA-Z0-9]/g, (char) => {
        const fullwidthMap: { [key: string]: string } = {
          a: "ａ",
          b: "ｂ",
          c: "ｃ",
          d: "ｄ",
          e: "ｅ",
          f: "ｆ",
          g: "ｇ",
          h: "ｈ",
          i: "ｉ",
          j: "ｊ",
          k: "ｋ",
          l: "ｌ",
          m: "ｍ",
          n: "ｎ",
          o: "ｏ",
          p: "ｐ",
          q: "ｑ",
          r: "ｒ",
          s: "ｓ",
          t: "ｔ",
          u: "ｕ",
          v: "ｖ",
          w: "𝚠",
          x: "ｘ",
          y: "𝙮",
          z: "𝚣",
          A: "Ａ",
          B: "Ｂ",
          C: "Ｃ",
          D: "Ｄ",
          E: "Ｅ",
          F: "Ｆ",
          G: "Ｇ",
          H: "Ｈ",
          I: "Ｉ",
          J: "Ｊ",
          K: "Ｋ",
          L: "Ｌ",
          M: "Ｍ",
          N: "Ｎ",
          O: "Ｏ",
          P: "Ｐ",
          Q: "Ｑ",
          R: "Ｒ",
          S: "Ｓ",
          T: "Ｔ",
          U: "Ｕ",
          V: "Ｖ",
          W: "𝕎",
          X: "𝕏",
          Y: "𝚈",
          Z: "Ｚ",
          "0": "０",
          "1": "１",
          "2": "２",
          "3": "３",
          "4": "４",
          "5": "５",
          "6": "６",
          "7": "７",
          "8": "８",
          "9": "９",
        }
        return fullwidthMap[char] || char
      }),
  },
  {
    name: "Minimalista",
    category: "moderni",
    transform: (text: string) => text.toLowerCase().replace(/\s+/g, ""),
  },
  {
    name: "Spazi Minimi",
    category: "moderni",
    transform: (text: string) => text.replace(/\s+/g, "·"),
  },
  {
    name: "Punti Separatori",
    category: "moderni",
    transform: (text: string) => text.split("").join("•"),
  },
  {
    name: "Linee Verticali",
    category: "moderni",
    transform: (text: string) => text.split("").join("|"),
  },
  {
    name: "Trattini",
    category: "moderni",
    transform: (text: string) => text.split("").join("-"),
  },
  {
    name: "Underscore",
    category: "moderni",
    transform: (text: string) => text.split("").join("_"),
  },
  {
    name: "Maiuscolo Moderno",
    category: "moderni",
    transform: (text: string) => text.toUpperCase(),
  },
  {
    name: "Minuscolo Moderno",
    category: "moderni",
    transform: (text: string) => text.toLowerCase(),
  },
  {
    name: "Alternato",
    category: "moderni",
    transform: (text: string) =>
      text
        .split("")
        .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join(""),
  },

  // Divertenti (15 fonts)
  {
    name: "Bubble",
    category: "divertenti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const bubbleMap: { [key: string]: string } = {
          a: "ⓐ",
          b: "ⓑ",
          c: "ⓒ",
          d: "ⓓ",
          e: "ⓔ",
          f: "ⓕ",
          g: "ⓖ",
          h: "ⓗ",
          i: "ⓘ",
          j: "ⓙ",
          k: "ⓚ",
          l: "ⓛ",
          m: "ⓜ",
          n: "ⓝ",
          o: "ⓞ",
          p: "ⓟ",
          q: "ⓠ",
          r: "ⓡ",
          s: "ⓢ",
          t: "ⓣ",
          u: "ⓤ",
          v: "ⓥ",
          w: "ⓦ",
          x: "ⓧ",
          y: "ⓨ",
          z: "ⓩ",
          A: "Ⓐ",
          B: "Ⓑ",
          C: "Ⓒ",
          D: "Ⓓ",
          E: "Ⓔ",
          F: "Ⓕ",
          G: "Ⓖ",
          H: "Ⓗ",
          I: "Ⓘ",
          J: "Ⓙ",
          K: "Ⓚ",
          L: "Ⓛ",
          M: "🄼",
          N: "🄽",
          O: "🄾",
          P: "🄿",
          Q: "🅀",
          R: "🅁",
          S: "🅂",
          T: "🅃",
          U: "🅄",
          V: "🅅",
          W: "🅆",
          X: "🅇",
          Y: "🅈",
          Z: "🅉",
        }
        return bubbleMap[char] || char
      }),
  },
  {
    name: "Quadrato",
    category: "divertenti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const squareMap: { [key: string]: string } = {
          a: "🄰",
          b: "🄱",
          c: "🄲",
          d: "🄳",
          e: "🄴",
          f: "🄵",
          g: "🄶",
          h: "🄷",
          i: "🄸",
          j: "🄹",
          k: "🄺",
          l: "🄻",
          m: "🄼",
          n: "🄽",
          o: "🄾",
          p: "🄿",
          q: "🅀",
          r: "🅁",
          s: "🅂",
          t: "🅃",
          u: "🅄",
          v: "🅅",
          w: "🅆",
          x: "🅇",
          y: "🅈",
          z: "🅉",
          A: "🄰",
          B: "🄱",
          C: "🄲",
          D: "🄳",
          E: "🄴",
          F: "🄵",
          G: "🄶",
          H: "🄷",
          I: "🄸",
          J: "🄹",
          K: "🄺",
          L: "🄻",
          M: "🄼",
          N: "🄽",
          O: "🄾",
          P: "🄿",
          Q: "🅀",
          R: "🅁",
          S: "🅂",
          T: "🅃",
          U: "🅄",
          V: "🅅",
          W: "🅆",
          X: "🅇",
          Y: "🅈",
          Z: "🅉",
        }
        return squareMap[char] || char
      }),
  },
  {
    name: "Quadrato Nero",
    category: "divertenti",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const blackSquareMap: { [key: string]: string } = {
          a: "🅰",
          b: "🅱",
          c: "🅲",
          d: "🅳",
          e: "🅴",
          f: "🅵",
          g: "🅶",
          h: "🅷",
          i: "🅸",
          j: "🅹",
          k: "🅺",
          l: "🅻",
          m: "🅼",
          n: "🅽",
          o: "🅾",
          p: "🅿",
          q: "🆀",
          r: "🆁",
          s: "🆂",
          t: "🆃",
          u: "🆄",
          v: "🆅",
          w: "🆆",
          x: "🆇",
          y: "🆈",
          z: "🆉",
          A: "🅰",
          B: "🅱",
          C: "🅲",
          D: "🅳",
          E: "🅴",
          F: "🅵",
          G: "🅶",
          H: "🅷",
          I: "🅸",
          J: "🅹",
          K: "🅺",
          L: "🅻",
          M: "🅼",
          N: "🅽",
          O: "🅾",
          P: "🅿",
          Q: "🆀",
          R: "🆁",
          S: "🆂",
          T: "🆃",
          U: "🆄",
          V: "🆅",
          W: "🆆",
          X: "🆇",
          Y: "🆈",
          Z: "🆉",
        }
        return blackSquareMap[char] || char
      }),
  },
  {
    name: "Stelle",
    category: "divertenti",
    transform: (text: string) => `✨${text.split("").join("⭐")}✨`,
  },
  {
    name: "Cuori",
    category: "divertenti",
    transform: (text: string) => `💖${text.split("").join("💕")}💖`,
  },
  {
    name: "Fiori",
    category: "divertenti",
    transform: (text: string) => `🌸${text.split("").join("🌺")}🌸`,
  },
  {
    name: "Arcobaleno",
    category: "divertenti",
    transform: (text: string) => `🌈${text}🌈`,
  },
  {
    name: "Fuoco",
    category: "divertenti",
    transform: (text: string) => `🔥${text}🔥`,
  },
  {
    name: "Diamanti",
    category: "divertenti",
    transform: (text: string) => `💎${text.split("").join("✨")}💎`,
  },
  {
    name: "Onde",
    category: "divertenti",
    transform: (text: string) => `〰️${text}〰️`,
  },
  {
    name: "Zigzag",
    category: "divertenti",
    transform: (text: string) => text.split("").join("〰"),
  },
  {
    name: "Parentesi Carine",
    category: "divertenti",
    transform: (text: string) => `(◕‿◕) ${text} (◕‿◕)`,
  },
  {
    name: "Kawaii",
    category: "divertenti",
    transform: (text: string) => `(｡◕‿◕｡) ${text} (｡◕‿◕｡)`,
  },
  {
    name: "Faccine",
    category: "divertenti",
    transform: (text: string) => `(◡ ‿ ◡) ${text} (◡ ‿ ◡)`,
  },
  {
    name: "Bolle Doppie",
    category: "divertenti",
    transform: (text: string) => `◉${text.split("").join("◎")}◉`,
  },

  // Gotici (10 fonts)
  {
    name: "Gotico",
    category: "gotici",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const gothicMap: { [key: string]: string } = {
          a: "𝔞",
          b: "𝔟",
          c: "𝔠",
          d: "𝔡",
          e: "𝔢",
          f: "𝔣",
          g: "𝔤",
          h: "𝔥",
          i: "𝔦",
          j: "𝔧",
          k: "𝔨",
          l: "𝔩",
          m: "𝔪",
          n: "𝔫",
          o: "𝔬",
          p: "𝔭",
          q: "𝔮",
          r: "𝔯",
          s: "𝔰",
          t: "𝔱",
          u: "𝔲",
          v: "𝔳",
          w: "𝔴",
          x: "𝔵",
          y: "𝔶",
          z: "𝔷",
          A: "𝔄",
          B: "𝔅",
          C: "ℭ",
          D: "𝔇",
          E: "𝔈",
          F: "𝔉",
          G: "𝔊",
          H: "ℌ",
          I: "ℑ",
          J: "𝔍",
          K: "𝔎",
          L: "𝔏",
          M: "𝔐",
          N: "𝔑",
          O: "𝔒",
          P: "𝔓",
          Q: "𝔔",
          R: "ℜ",
          S: "𝔖",
          T: "𝔗",
          U: "𝔘",
          V: "𝔙",
          W: "𝔚",
          X: "𝔛",
          Y: "𝔜",
          Z: "ℨ",
        }
        return gothicMap[char] || char
      }),
  },
  {
    name: "Gotico Grassetto",
    category: "gotici",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const gothicBoldMap: { [key: string]: string } = {
          a: "𝖆",
          b: "𝖇",
          c: "𝖈",
          d: "𝖉",
          e: "𝖊",
          f: "𝖋",
          g: "𝖌",
          h: "𝖍",
          i: "𝖎",
          j: "𝖏",
          k: "𝖐",
          l: "𝖑",
          m: "𝖒",
          n: "𝖓",
          o: "𝖔",
          p: "𝖕",
          q: "𝖖",
          r: "𝖗",
          s: "𝖘",
          t: "𝖙",
          u: "𝖚",
          v: "𝖛",
          w: "𝖜",
          x: "𝖝",
          y: "𝖞",
          z: "𝖟",
          A: "𝕬",
          B: "𝕭",
          C: "𝕮",
          D: "𝕯",
          E: "𝕰",
          F: "𝕱",
          G: "𝕲",
          H: "𝕳",
          I: "𝕴",
          J: "𝕵",
          K: "𝕶",
          L: "𝕷",
          M: "𝕸",
          N: "𝕹",
          O: "𝕺",
          P: "𝕻",
          Q: "𝕼",
          R: "𝕽",
          S: "𝕾",
          T: "𝕿",
          U: "𝖀",
          V: "𝖁",
          W: "𝖂",
          X: "𝖃",
          Y: "𝖄",
          Z: "𝖅",
        }
        return gothicBoldMap[char] || char
      }),
  },
  {
    name: "Medievale",
    category: "gotici",
    transform: (text: string) => `⚔️${text}⚔️`,
  },
  {
    name: "Runico",
    category: "gotici",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const runicMap: { [key: string]: string } = {
          a: "ᚨ",
          b: "ᛒ",
          c: "ᚲ",
          d: "ᛞ",
          e: "ᛖ",
          f: "ᚠ",
          g: "ᚷ",
          h: "ᚺ",
          i: "ᛁ",
          j: "ᛃ",
          k: "ᚲ",
          l: "ᛚ",
          m: "ᛗ",
          n: "ᚾ",
          o: "ᛟ",
          p: "ᛈ",
          q: "ᚲ",
          r: "ᚱ",
          s: "ᛊ",
          t: "ᛏ",
          u: "ᚢ",
          v: "ᚢ",
          w: "ᚹ",
          x: "ᚲᛊ",
          y: "ᛃ",
          z: "ᛉ",
          A: "ᚨ",
          B: "ᛒ",
          C: "ᚲ",
          D: "ᛞ",
          E: "ᛖ",
          F: "ᚠ",
          G: "ᚷ",
          H: "ᚺ",
          I: "ᛁ",
          J: "ᛃ",
          K: "ᚲ",
          L: "ᛚ",
          M: "ᛗ",
          N: "ᚾ",
          O: "ᛟ",
          P: "ᛈ",
          Q: "ᚲ",
          R: "ᚱ",
          S: "ᛊ",
          T: "ᛏ",
          U: "ᚢ",
          v: "ᚢ",
          W: "ᚹ",
          X: "ᚲᛊ",
          Y: "ᛃ",
          Z: "ᛉ",
        }
        return runicMap[char] || char
      }),
  },
  {
    name: "Teschi",
    category: "gotici",
    transform: (text: string) => `💀${text}💀`,
  },
  {
    name: "Spade",
    category: "gotici",
    transform: (text: string) => `⚔️${text.split("").join("🗡️")}⚔️`,
  },
  {
    name: "Catene",
    category: "gotici",
    transform: (text: string) => `⛓️${text}⛓️`,
  },
  {
    name: "Cornici Gotiche",
    category: "gotici",
    transform: (text: string) => `【${text}】`,
  },
  {
    name: "Parentesi Gotiche",
    category: "gotici",
    transform: (text: string) => `〖${text}〗`,
  },
  {
    name: "Bordi Scuri",
    category: "gotici",
    transform: (text: string) => `▓${text}▓`,
  },

  // Speciali (15 fonts)
  {
    name: "Sottosopra",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .reverse()
        .map((char) => {
          const upsideDownMap: { [key: string]: string } = {
            a: "ɐ",
            b: "q",
            c: "ɔ",
            d: "p",
            e: "ǝ",
            f: "ɟ",
            g: "ƃ",
            h: "ɥ",
            i: "ᴉ",
            j: "ɾ",
            k: "ʞ",
            l: "l",
            m: "ɯ",
            n: "u",
            o: "o",
            p: "d",
            q: "b",
            r: "ɹ",
            s: "s",
            t: "ʇ",
            u: "n",
            v: "ʌ",
            w: "ʍ",
            x: "x",
            y: "ʎ",
            z: "z",
            " ": " ",
            A: "∀",
            B: "ᗺ",
            C: "Ɔ",
            D: "ᗡ",
            E: "Ǝ",
            F: "ᖴ",
            G: "פ",
            H: "H",
            I: "I",
            J: "ſ",
            K: "ʞ",
            L: "˥",
            M: "W",
            N: "N",
            O: "O",
            P: "Ԁ",
            Q: "Q",
            R: "ᴿ",
            S: "S",
            T: "┴",
            U: "∩",
            V: "Λ",
            W: "M",
            X: "X",
            Y: "⅄",
            Z: "Z",
          }
          return upsideDownMap[char.toLowerCase()] || char
        })
        .join(""),
  },
  {
    name: "Spazi Larghi",
    category: "speciali",
    transform: (text: string) => text.split("").join(" "),
  },
  {
    name: "Spazi Extra Larghi",
    category: "speciali",
    transform: (text: string) => text.split("").join("  "),
  },
  {
    name: "Zalgo Leggero",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "̃")
        .join(""),
  },
  {
    name: "Zalgo Medio",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "̃" + "̂")
        .join(""),
  },
  {
    name: "Zalgo Pesante",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "̃" + "̂" + "̌")
        .join(""),
  },
  {
    name: "Specchiato",
    category: "speciali",
    transform: (text: string) =>
      text.replace(/[a-zA-Z]/g, (char) => {
        const mirrorMap: { [key: string]: string } = {
          a: "ɒ",
          b: "d",
          c: "ɔ",
          d: "b",
          e: "ɘ",
          f: "ʇ",
          g: "ǫ",
          h: "ʜ",
          i: "i",
          j: "ꞁ",
          k: "ʞ",
          l: "l",
          m: "m",
          n: "n",
          o: "o",
          p: "q",
          q: "p",
          r: "ɿ",
          s: "ƨ",
          t: "ƚ",
          u: "u",
          v: "v",
          w: "w",
          x: "x",
          y: "ʏ",
          z: "ƹ",
          A: "A",
          B: "ᗺ",
          C: "Ɔ",
          D: "ᗡ",
          E: "Ǝ",
          F: "ᖴ",
          G: "Ә",
          H: "H",
          I: "I",
          J: "Ⴑ",
          K: "ʞ",
          L: "⅃",
          M: "M",
          N: "N",
          O: "O",
          P: "Գ",
          Q: "Ό",
          R: "Я",
          S: "Ƨ",
          T: "T",
          U: "U",
          V: "V",
          W: "W",
          X: "X",
          Y: "Y",
          Z: "Ƹ",
        }
        return mirrorMap[char] || char
      }),
  },
  {
    name: "Barrato",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u0336")
        .join(""),
  },
  {
    name: "Doppio Barrato",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u0336" + "\u0336")
        .join(""),
  },
  {
    name: "Cerchiato",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u20DD")
        .join(""),
  },
  {
    name: "Quadrato Cerchiato",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u20DE")
        .join(""),
  },
  {
    name: "Diamante Cerchiato",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char) => char + "\u20DF")
        .join(""),
  },
  {
    name: "Glitch",
    category: "speciali",
    transform: (text: string) =>
      text
        .split("")
        .map((char, i) => {
          const glitchChars = ["̸", "̵", "̶", "̷", "̴"]
          return char + glitchChars[i % glitchChars.length]
        })
        .join(""),
  },
  {
    name: "Aesthetic Vaporwave",
    category: "speciali",
    transform: (text: string) => `【${text.toUpperCase()}】`,
  },
  {
    name: "Cyberpunk",
    category: "speciali",
    transform: (text: string) => `▓▒░${text.toUpperCase()}░▒▓`,
  },
]

const categories = [
  {
    id: "tutti",
    name: "Tutti",
    description: "Tutti i font disponibili",
    icon: "🎨",
    count: fontStyles.length,
  },
  {
    id: "eleganti",
    name: "Eleganti",
    description: "Font sofisticati per un look raffinato",
    icon: "✨",
    count: fontStyles.filter((f) => f.category === "eleganti").length,
  },
  {
    id: "moderni",
    name: "Moderni",
    description: "Stili contemporanei e minimalisti",
    icon: "🔥",
    count: fontStyles.filter((f) => f.category === "moderni").length,
  },
  {
    id: "divertenti",
    name: "Divertenti",
    description: "Font giocosi e creativi",
    icon: "🎉",
    count: fontStyles.filter((f) => f.category === "divertenti").length,
  },
  {
    id: "gotici",
    name: "Gotici",
    description: "Stili medievali e misteriosi",
    icon: "⚔️",
    count: fontStyles.filter((f) => f.category === "gotici").length,
  },
  {
    id: "speciali",
    name: "Speciali",
    description: "Effetti unici e trasformazioni creative",
    icon: "🌟",
    count: fontStyles.filter((f) => f.category === "speciali").length,
  },
]

export default function FontGenerator() {
  const [inputText, setInputText] = useState("FontInsta.org")
  const [selectedCategory, setSelectedCategory] = useState("tutti")
  const [favorites, setFavorites] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleFonts, setVisibleFonts] = useState(12)
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    transformedText: "",
    fontName: "",
  })

  const [isMobile, setIsMobile] = useState(false)
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
  const [copiedFont, setCopiedFont] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFont, setSelectedFont] = useState("")

  const fontTransformCache = useMemo(() => {
    const cache = new Map<string, string>()
    const maxSize = isMobile ? 50 : 100 // Smaller cache on mobile

    return {
      get: (key: string) => cache.get(key),
      set: (key: string, value: string) => {
        if (cache.size >= maxSize) {
          const firstKey = cache.keys().next().value
          cache.delete(firstKey)
        }
        cache.set(key, value)
      },
      has: (key: string) => cache.has(key),
      clear: () => cache.clear(),
    }
  }, [isMobile])

  const getTransformedText = useCallback(
    (font: (typeof fontStyles)[0], text: string) => {
      const cacheKey = `${font.name}-${text}`
      if (fontTransformCache.has(cacheKey)) {
        return fontTransformCache.get(cacheKey)!
      }

      const transformed = font.transform(text)
      fontTransformCache.set(cacheKey, transformed)
      return transformed
    },
    [fontTransformCache],
  )

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("fontinsta-favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const toggleFavorite = useCallback(
    (fontName: string) => {
      const newFavorites = favorites.includes(fontName)
        ? favorites.filter((f) => f !== fontName)
        : [...favorites, fontName]

      setFavorites(newFavorites)
      localStorage.setItem("fontinsta-favorites", JSON.stringify(newFavorites))
    },
    [favorites],
  )

  const copyToClipboard = useCallback(
    async (text: string, fontName: string) => {
      try {
        // First try modern clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text)
        } else {
          // Mobile-optimized fallback
          const textArea = document.createElement("textarea")
          textArea.value = text
          textArea.style.position = "absolute"
          textArea.style.left = "-9999px"
          textArea.style.top = "0"
          textArea.style.opacity = "0"
          textArea.setAttribute("readonly", "")
          textArea.style.fontSize = "16px" // Prevent zoom on iOS
          document.body.appendChild(textArea)

          // Focus and select for mobile
          textArea.focus()
          textArea.setSelectionRange(0, text.length)

          // Try to copy
          let successful = false
          try {
            successful = document.execCommand("copy")
          } catch (err) {
            console.log("execCommand failed:", err)
          }

          document.body.removeChild(textArea)

          if (!successful) {
            // Final fallback - show text for manual copy
            const modal = document.createElement("div")
            modal.style.cssText = `
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.3);
              z-index: 10000;
              max-width: 90vw;
              text-align: center;
            `
            modal.innerHTML = `
              <p style="margin-bottom: 10px; font-weight: bold;">Copia questo testo:</p>
              <textarea readonly style="width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px;">${text}</textarea>
              <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 8px 16px; background: #f59e0b; color: white; border: none; border-radius: 4px;">Chiudi</button>
            `
            document.body.appendChild(modal)

            // Auto-select text in the modal
            const textarea = modal.querySelector("textarea") as HTMLTextAreaElement
            textarea.focus()
            textarea.select()

            setTimeout(() => {
              if (modal.parentElement) {
                modal.remove()
              }
            }, 10000)

            toast({
              description: "Seleziona e copia il testo dalla finestra popup",
              duration: 5000,
            })
            return
          }
        }

        setCopiedFont(fontName)
        toast({
          description: "Font per Instagram copiato! Incollalo su Instagram.",
          duration: 2000,
        })
        setTimeout(() => setCopiedFont(null), 2500)
      } catch (err) {
        console.error("Failed to copy font per Instagram: ", err)
        toast({
          description: "Errore nella copia. Usa il popup per copiare manualmente.",
          variant: "destructive",
          duration: 3000,
        })
      }
    },
    [isMobile, toast],
  )

  const getRandomFont = useCallback(() => {
    const randomFont = fontStyles[Math.floor(Math.random() * fontStyles.length)]
    const transformedText = getTransformedText(randomFont, inputText)
    copyToClipboard(transformedText, randomFont.name)
  }, [inputText, getTransformedText, copyToClipboard])

  const openInstagramPreview = useCallback((transformedText: string, fontName: string) => {
    setPreviewModal({
      isOpen: true,
      transformedText,
      fontName,
    })
  }, [])

  const closeInstagramPreview = useCallback(() => {
    setPreviewModal({
      isOpen: false,
      transformedText: "",
      fontName: "",
    })
  }, [])

  const filteredAndSearchedFonts = useMemo(() => {
    let filtered =
      selectedCategory === "tutti" ? fontStyles : fontStyles.filter((font) => font.category === selectedCategory)

    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase().trim()
      filtered = filtered.filter(
        (font) =>
          font.name.toLowerCase().includes(query) ||
          font.category.toLowerCase().includes(query) ||
          categories
            .find((c) => c.id === font.category)
            ?.name.toLowerCase()
            .includes(query),
      )
    }

    return filtered
  }, [selectedCategory, debouncedSearchQuery])

  // Sort fonts (favorites first)
  const sortedFonts = useMemo(() => {
    return [...filteredAndSearchedFonts].sort((a, b) => {
      const aIsFavorite = favorites.includes(a.name)
      const bIsFavorite = favorites.includes(b.name)
      if (aIsFavorite && !bIsFavorite) return -1
      if (!aIsFavorite && bIsFavorite) return 1
      return 0
    })
  }, [filteredAndSearchedFonts, favorites])

  const displayedFonts = useMemo(() => {
    const mobileLimit = isMobile ? Math.min(visibleFonts, 8) : visibleFonts
    return sortedFonts.slice(0, mobileLimit)
  }, [sortedFonts, visibleFonts, isMobile])

  const hasMoreFonts = sortedFonts.length > displayedFonts.length

  const loadMoreFonts = useCallback(() => {
    const increment = isMobile ? 6 : 12
    setVisibleFonts((prev) => prev + increment)
  }, [isMobile])

  useEffect(() => {
    setVisibleFonts(30)
  }, [selectedCategory, searchQuery])

  useEffect(() => {
    fontTransformCache.clear()
  }, [inputText, fontTransformCache])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-2">
                <img
                  src="/android-chrome-192x192.png"
                  alt="FontInsta.org Logo"
                  className="w-7 h-7 md:w-10 md:h-10"
                  loading="eager"
                  decoding="async"
                />
                <h1 className="text-lg md:text-2xl font-bold text-primary">FontInsta.org</h1>
              </div>
              <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
                GRATUITO
              </Badge>
            </div>
            <Link href="/chi-siamo" className="text-sm md:text-base hover:text-primary transition-colors">
              Chi Siamo
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-balance mb-3 md:mb-4">
            Font per Instagram: Generatore Gratuito di Caratteri Speciali
          </h1>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            Crea font per Instagram unici e accattivanti. Il miglior generatore di font per Instagram in italiano -
            copia e incolla facilmente oltre 70 stili diversi.
          </p>
        </div>

        {/* Input Section */}
        <Card className="p-4 md:p-6 mb-6 md:mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="input-text" className="text-sm md:text-base font-medium">
                Inserisci il tuo testo per generare font per Instagram
              </Label>
              <Textarea
                id="input-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="mt-2 min-h-[80px] md:min-h-[100px] text-base md:text-lg"
                placeholder="Scrivi qui il testo che vuoi trasformare con i nostri font per Instagram..."
                style={{ fontSize: "16px" }} // Prevent zoom on iOS
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  placeholder="Cerca font per Instagram..."
                  style={{ fontSize: "16px" }} // Prevent zoom on iOS
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </div>
              <Button
                onClick={getRandomFont}
                variant="outline"
                size="default"
                className="flex items-center gap-2 whitespace-nowrap bg-transparent"
              >
                <Shuffle className="h-4 w-4" />
                <span className="hidden sm:inline">Font Casuale</span>
                <span className="sm:hidden">Casuale</span>
              </Button>
            </div>
          </div>
        </Card>

        <div className="space-y-4 mb-6 md:mb-8">
          {/* Category Filter with Enhanced UI */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filtra per categoria:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex flex-col items-center gap-1 h-auto py-2 md:py-3 text-xs"
                  title={category.description}
                >
                  <span className="text-base md:text-lg">{category.icon}</span>
                  <span className="font-medium text-xs">{category.name}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {debouncedSearchQuery ? (
                <>
                  {filteredAndSearchedFonts.length} font per Instagram trovati per "{debouncedSearchQuery}"
                </>
              ) : (
                <>
                  {filteredAndSearchedFonts.length} font per Instagram disponibili
                  {selectedCategory !== "tutti" && (
                    <> nella categoria {categories.find((c) => c.id === selectedCategory)?.name}</>
                  )}
                </>
              )}
            </span>
            {favorites.length > 0 && (
              <span className="flex items-center gap-1">
                <Heart className="h-3 w-3 fill-current text-red-500" />
                {favorites.length} preferiti
              </span>
            )}
          </div>
        </div>

        {/* Font Grid */}
        {filteredAndSearchedFonts.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">Nessun font per Instagram trovato per "{debouncedSearchQuery}"</p>
            <Button onClick={() => setSearchQuery("")} variant="outline">
              Mostra tutti i font per Instagram
            </Button>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {displayedFonts.map((font) => {
                const transformedText = getTransformedText(font, inputText)
                const isFavorite = favorites.includes(font.name)

                return (
                  <Card key={font.name} className="p-4 md:p-6 hover:shadow-md transition-all duration-200">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm md:text-base">{font.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {categories.find((c) => c.id === font.category)?.name}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(font.name)}
                          className="h-8 w-8 p-0"
                        >
                          <Heart
                            className={`h-4 w-4 ${isFavorite ? "fill-current text-red-500" : "text-muted-foreground"}`}
                          />
                        </Button>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-3 md:p-4 min-h-[60px] md:min-h-[80px] flex items-center">
                        <p
                          className="text-lg md:text-xl font-medium break-all leading-relaxed w-full text-center"
                          style={{ wordBreak: "break-word" }}
                        >
                          {transformedText}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => copyToClipboard(transformedText, font.name)}
                          className="flex-1 text-sm hover:bg-amber-600 active:bg-amber-700 transition-colors touch-manipulation"
                          size="sm"
                          style={{ minHeight: "44px" }} // Better touch target
                          onTouchStart={(e) => {
                            e.currentTarget.style.transform = "scale(0.95)"
                            e.currentTarget.style.backgroundColor = "#d97706"
                          }}
                          onTouchEnd={(e) => {
                            e.currentTarget.style.transform = "scale(1)"
                            e.currentTarget.style.backgroundColor = ""
                          }}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          {copiedFont === font.name ? "Copiato!" : "Copia"}
                        </Button>
                        <Button
                          onClick={() =>
                            setPreviewModal({
                              isOpen: true,
                              transformedText: transformedText,
                              fontName: font.name,
                            })
                          }
                          variant="outline"
                          size="sm"
                          className="hover:bg-amber-50 active:bg-amber-100 transition-colors touch-manipulation"
                          style={{ minHeight: "44px" }} // Better touch target
                          onTouchStart={(e) => {
                            e.currentTarget.style.transform = "scale(0.95)"
                          }}
                          onTouchEnd={(e) => {
                            e.currentTarget.style.transform = "scale(1)"
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => toggleFavorite(font.name)}
                          variant="ghost"
                          size="sm"
                          className="hover:bg-red-50 active:bg-red-100 transition-colors"
                          onTouchStart={(e) => {
                            e.currentTarget.style.transform = "scale(0.95)"
                          }}
                          onTouchEnd={(e) => {
                            e.currentTarget.style.transform = "scale(1)"
                          }}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              favorites.includes(font.name) ? "fill-red-500 text-red-500" : "text-gray-400"
                            }`}
                          />
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Load More Button */}
            {hasMoreFonts && (
              <div className="text-center">
                <Button onClick={loadMoreFonts} variant="outline" size="lg" className="w-full md:w-auto bg-transparent">
                  Carica altri font per Instagram ({sortedFonts.length - displayedFonts.length} rimanenti)
                </Button>
              </div>
            )}
          </>
        )}

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-muted/30 rounded-lg mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Perché Scegliere FontInsta per i Tuoi Font per Instagram?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              FontInsta.org è il generatore di font per Instagram più completo e veloce d'Italia. Oltre 70 font per
              Instagram gratuiti sempre disponibili.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Font per Instagram Istantanei</h3>
              <p className="text-muted-foreground">
                Genera font per Instagram in millisecondi. Il nostro algoritmo avanzato trasforma il tuo testo
                istantaneamente senza lag o attese.
              </p>
            </Card>

            <Card className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Eye className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Anteprima Instagram Realistica</h3>
              <p className="text-muted-foreground">
                Visualizza esattamente come appariranno i tuoi font per Instagram nel feed, nelle storie e nella bio.
                Anteprima pixel-perfect garantita.
              </p>
            </Card>

            <Card className="p-4 md:p-6 text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">70+ Font per Instagram</h3>
              <p className="text-muted-foreground">
                La più vasta collezione di font per Instagram in italiano: eleganti, moderni, divertenti, gotici e
                speciali. Sempre aggiornata con nuovi stili.
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Come Creare Font per Instagram in 4 Semplici Passi
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trasforma il tuo testo in font per Instagram accattivanti seguendo questi semplici passaggi
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Scrivi il Testo</h3>
              <p className="text-sm text-muted-foreground">
                Inserisci il testo che vuoi trasformare nella casella di input
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Scegli il Font</h3>
              <p className="text-sm text-muted-foreground">
                Naviga tra oltre 70 font diversi organizzati per categoria
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Anteprima</h3>
              <p className="text-sm text-muted-foreground">
                Visualizza come apparirà su Instagram con la nostra anteprima
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Copia e Incolla</h3>
              <p className="text-sm text-muted-foreground">Copia il testo trasformato e incollalo su Instagram</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Domande Frequenti sui Font per Instagram</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tutto quello che devi sapere sui font per Instagram e come utilizzarli al meglio
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-4 md:p-6">
              <h3 className="font-semibold mb-2">I font per Instagram funzionano su tutti i dispositivi?</h3>
              <p className="text-muted-foreground">
                Sì, tutti i nostri font per Instagram utilizzano caratteri Unicode standard che funzionano perfettamente
                su iPhone, Android, computer e tablet. Compatibilità garantita al 100%.
              </p>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="font-semibold mb-2">Posso usare questi font per Instagram su altre piattaforme?</h3>
              <p className="text-muted-foreground">
                Assolutamente! I font per Instagram generati da FontInsta funzionano anche su Facebook, Twitter, TikTok,
                WhatsApp e qualsiasi piattaforma che supporta Unicode.
              </p>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="font-semibold mb-2">Quanti font per Instagram posso generare gratuitamente?</h3>
              <p className="text-muted-foreground">
                Illimitati! FontInsta.org offre accesso gratuito e illimitato a tutti i 70+ font per Instagram. Nessuna
                registrazione richiesta, nessun limite di utilizzo.
              </p>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="font-semibold mb-2">I font per Instagram influenzano l'algoritmo?</h3>
              <p className="text-muted-foreground">
                I font per Instagram creativi possono aumentare significativamente l'engagement dei tuoi post,
                aiutandoti a distinguerti nel feed e attirare più like e commenti.
              </p>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="font-semibold mb-2">Come scegliere i migliori font per Instagram?</h3>
              <p className="text-muted-foreground">
                Scegli font per Instagram che riflettano la tua personalità: eleganti per brand professionali,
                divertenti per contenuti casual, gotici per temi dark. Usa la nostra anteprima per decidere.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <InstagramPreviewModal
        isOpen={previewModal.isOpen}
        onClose={closeInstagramPreview}
        transformedText={previewModal.transformedText}
        fontName={previewModal.fontName}
      />

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12 md:mt-16">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 FontInsta.org - Il miglior generatore di font per Instagram gratuito in italiano</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/chi-siamo" className="hover:text-primary transition-colors">
                Chi Siamo
              </Link>
              <Link href="/contattaci" className="hover:text-primary transition-colors">
                Contattaci
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/termini" className="hover:text-primary transition-colors">
                Termini di Servizio
              </Link>
            </div>
            <div className="mt-4 text-xs">
              <p>
                Font per Instagram • Generatore caratteri speciali • Copia e incolla • 70+ stili gratuiti • Unicode
                compatibile
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
