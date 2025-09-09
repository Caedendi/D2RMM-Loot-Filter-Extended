import { D2Color } from "../../Models/Colors/D2Color";
import { EGemType } from "../../Models/Items/EGemType";
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

  public static gemColors: { type: EGemType, color: D2Color }[] = [
    { type: EGemType.AMETHYST, color: this.amethystColor },
    { type: EGemType.DIAMOND,  color: this.diamondColor  },
    { type: EGemType.EMERALD,  color: this.emeraldColor  },
    { type: EGemType.RUBY,     color: this.rubyColor     },
    { type: EGemType.SAPPHIRE, color: this.sapphireColor },
    { type: EGemType.TOPAZ,    color: this.topazColor    },
    { type: EGemType.SKULL,    color: this.skullColor    },
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
