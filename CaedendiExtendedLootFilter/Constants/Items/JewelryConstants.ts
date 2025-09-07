import { D2Color } from "../../Models/Colors/D2Color";
import { EGem } from "../../Models/Items/EGem";
import { CharConstants } from "../CharConstants";
import { ColorConstants } from "../Colors/ColorConstants";
import { CharmConstants } from "./CharmConstants";
import { HighlightConstants } from "./HighlightConstants";

export abstract class JewelryConstants {
  public static ringId = "rin";
  public static amuletId = "amu";
  public static jewelId = "jew";

  public static iLvlJewelry: string[] = [
    this.ringId,
    this.amuletId,
    this.jewelId,
    CharmConstants.charmSmallId,
    CharmConstants.charmLargeId,
    CharmConstants.charmGrandId,
  ];

  public static readonly amethystColor = ColorConstants.purple;
  public static readonly diamondColor  = ColorConstants.white;
  public static readonly emeraldColor  = ColorConstants.green;
  public static readonly rubyColor     = ColorConstants.red;
  public static readonly sapphireColor = ColorConstants.blue;
  public static readonly topazColor    = ColorConstants.yellow;
  public static readonly skullColor    = ColorConstants.gray;

  public static readonly gemNameColor = ColorConstants.white;
  public static readonly gemHighlight = CharConstants.o;
  public static readonly gemPadding   = HighlightConstants.padding.p1;

  public static gemColors: { type: EGem, color: D2Color }[] = [
    { type: EGem.AMETHYST, color: this.amethystColor },
    { type: EGem.DIAMOND,  color: this.diamondColor  },
    { type: EGem.EMERALD,  color: this.emeraldColor  },
    { type: EGem.RUBY,     color: this.rubyColor     },
    { type: EGem.SAPPHIRE, color: this.sapphireColor },
    { type: EGem.TOPAZ,    color: this.topazColor    },
    { type: EGem.SKULL,    color: this.skullColor    },
  ];

  public static translatedGemNames: string[] = [
    //==========//
    // Amethyst //
    //==========//
    // prefixes
    "Amatista ",
    "Améthyste ",
    "Ametista ",
    "Ametyst ",
    "Amatista ",
    // suffixes
    " Amethyst",
    " 자수정",
    " Аметист",
    // other
    "アメジスト",
    "紫寶石",
    "紫宝石",

    //=========//
    // Diamond //
    //=========//
    // prefixes
    "Diamante ",
    "Diamant ",
    "Diament ",
    // suffixes
    " Diamond",
    " Diamant",
    " 다이아몬드",
    " бриллиант",
    // other
    "鑽石",
    "ダイアモンド",
    "钻石",
    
    //=========//
    // Emerald //
    //=========//
    // prefixes
    "Esmeralda ",
    "Émeraude ",
    "Smeraldo ",
    "Esmeralda ",
    // suffixes
    " Emerald",
    " Smaragd",
    " 에메랄드",
    " Szmaragd",
    " Изумруд",
    // other
    "綠寶石",
    "エメラルド",
    "绿宝石",

    //======//
    // Ruby //
    //======//
    // prefixes
    "Rubí ",
    "Rubis ",
    "Rubino ",
    "Rubi ",
    // suffixes
    " Ruby",
    " Rubin",
    " 루비",
    " Рубин",
    // other
    "紅寶石",
    "ルビー",
    "红宝石",


    //==========//
    // Sapphire //
    //==========//
    // prefixes
    "Zafiro ",
    "Saphir ",
    "Zaffiro ",
    "Safira ",
    // suffixes
    " Sapphire",
    " Saphir",
    " 사파이어",
    " Szafir",
    " Сапфир",
    // other
    "藍寶石",
    "サファイア",
    "蓝宝石",


    //=======//
    // Topaz //
    //=======//
    // prefixes
    "Topacio ",
    "Topaze ",
    "Topazio ",
    "Topázio ",
    // suffixes
    " Topaz",
    " Topas",
    " 토파즈",
    " Топаз",
    // other
    "黃寶石",
    "トパーズ",
    "黄宝石",


    //=======//
    // Skull //
    //=======//
    // prefixes
    "Cráneo ",
    "Crâne ",
    "Teschio ",
    "Czaszka ",
    "Caveira ",
    // suffixes
    " Skull",
    " Schädel",
    " 해골",
    " Череп",
    // other
    "骷髏石",
    "頭蓋骨",
    "头骨宝石",
  ];
}
