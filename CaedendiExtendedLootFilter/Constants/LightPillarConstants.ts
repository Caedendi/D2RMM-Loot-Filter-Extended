export abstract class LightPillarConstants {
  // item paths
  public static PATH_ITEMS = "hd\\items\\";
  public static PATH_ITEMS_MISC = `${this.PATH_ITEMS}misc\\`;
  public static PATH_ITEMS_WEAPON = `${this.PATH_ITEMS}weapon\\`;
  public static PATH_ITEMS_MISC_BODY_PART = `${this.PATH_ITEMS_MISC}body_part\\`;
  public static PATH_ITEMS_MISC_QUEST = `${this.PATH_ITEMS_MISC}quest\\`;
  public static PATH_ITEMS_WEAPON_HAMMER = `${this.PATH_ITEMS_WEAPON}hammer\\`;
  public static PATH_ITEMS_WEAPON_MACE = `${this.PATH_ITEMS_WEAPON}mace\\`;
  public static PATH_ITEMS_WEAPON_STAFF = `${this.PATH_ITEMS_WEAPON}staff\\`;

  // vfx paths
  protected static PATH_VFX_BASE = "data/hd/vfx/particles/overlays/";
  protected static PATH_HORADRIC_LIGHT = `${this.PATH_VFX_BASE}object/horadric_light/fx_horadric_light.particles`;
  protected static PATH_PALADIN_FANATICISM = `${this.PATH_VFX_BASE}paladin/aura_fanatic/aura_fanatic.particles`;
  protected static PATH_VALKYRIE_START = `${this.PATH_VFX_BASE}common/valkyriestart/valkriestart_overlay.particles`;

  // vfx names
  protected static DEFINITION_COMPONENT_TRANSFORM = "TransformDefinitionComponent";
  protected static DEFINITION_COMPONENT_VFX = "VfxDefinitionComponent";
  protected static NAME_TRANSFORM1 = "component_transform1";
  protected static NAME_VFX_STOLEN = "entity_vfx_filthyStolenMod";
  protected static NAME_VFX_ROOT = "entity_root_VfxDefinition";

  // vfx params
  protected static TYPE_ENTITY = "Entity";
  protected static NAME_DROPLIGHT = "droplight";
  protected static NAME_ENTITY_ROOT = "entity_root";
  protected static ID_DROPLIGHT = 9999996974;
  protected static ID_ENTITY_ROOT = 1079187010;

  // vfx light pillar
  public static LIGHT_PILLAR_COMPONENT = {
    particle: {
      path: this.PATH_HORADRIC_LIGHT,
    },
    entities: [
      {
        type: this.TYPE_ENTITY,
        name: this.NAME_DROPLIGHT,
        id: this.ID_DROPLIGHT,
        components: [
          {
            type: this.DEFINITION_COMPONENT_TRANSFORM,
            name: this.NAME_TRANSFORM1,
            position: { x: 0, y: 0, z: 0 },
            orientation: { x: 0, y: 0, z: 0, w: 1 },
            scale: { x: 1, y: 1, z: 1 },
            inheritOnlyPosition: false
          },
          {
            type: this.DEFINITION_COMPONENT_VFX,
            name: this.NAME_VFX_STOLEN,
            filename: this.PATH_HORADRIC_LIGHT,
            hardKillOnDestroy: false
          }
        ]
      },
      {
        type: this.TYPE_ENTITY,
        name: this.NAME_ENTITY_ROOT,
        id: this.ID_ENTITY_ROOT,
        components: [
          {
            type: this.DEFINITION_COMPONENT_VFX,
            name: this.NAME_VFX_ROOT,
            filename: this.PATH_PALADIN_FANATICISM,
            hardKillOnDestroy: false
          }
        ]
      },
      {
        type: this.TYPE_ENTITY,
        name: this.NAME_DROPLIGHT,
        id: this.ID_DROPLIGHT,
        components: [
          {
            type: this.DEFINITION_COMPONENT_TRANSFORM,
            name: this.NAME_TRANSFORM1,
            position: { x: 0, y: 0, z: 0 },
            orientation: { x: 0, y: 0, z: 0, w: 1 },
            scale: { x: 1, y: 1, z: 1 },
            inheritOnlyPosition: false
          },
          {
            type: this.DEFINITION_COMPONENT_VFX,
            name: this.NAME_VFX_STOLEN,
            filename: this.PATH_VALKYRIE_START,
            hardKillOnDestroy: false
          }
        ]
      }
    ]
  };
}
