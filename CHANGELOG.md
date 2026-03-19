# 📝 Histórico de Alterações (Changelog)

Este arquivo registra todas as intervenções de correção e arquitetura realizadas no projeto. Fornece links diretos para os arquivos que sofreram manutenção para ter visibilidade total.

## [Correções da Arquitetura e Backend] - Através da Fase 1 e 2

### 🐛 Consertos de Bugs (Bug Fixes)
- **[app.module.ts](file:///home/rhay/Projets/loccoloc/apps/api/src/app.module.ts)**:
  - Importação dos módulos nucleares do LocColoc que haviam ficado órfãos (`PropertyModule`, `RoomsModule`, `TypePropertyModule`), reconectando-os à árvore do NestJS.
- **[rooms.controller.ts](file:///home/rhay/Projets/loccoloc/apps/api/src/resources/rooms/rooms.controller.ts#L24-25)**:
  - Corrigido erro de digitação crítico no endpoint de POST (criação de quartos), mudando o injetor `@Param('porpertyId')` para `@Param('propertyId')`, impedindo falha silenciosa.
- **[rooms.controller.ts](file:///home/rhay/Projets/loccoloc/apps/api/src/resources/rooms/rooms.controller.ts#L67-70)**:
  - Anexada injeção de dependência ausente `@Request() req: any` na função `remove(id, ownerId)` do controller de Locações. Extraiu adequadamente o `ownerId` por segurança JWT.
- **[type_property.controller.ts](file:///home/rhay/Projets/loccoloc/apps/api/src/resources/types_property/type_property.controller.ts)**:
  - Removidos os conversores unários (ex: `+id`) gerados incorretamente pelo boilerplate NestJS, que forçavam IDs do banco a virarem `NaN`. Como o MongoDB usa ObjectId alfanumérico em String, isto fatalmente quebraria as rotas GET, PATCH e DELETE.
- **[type_property.service.ts](file:///home/rhay/Projets/loccoloc/apps/api/src/resources/types_property/type_property.service.ts)**:
  - Substituída a tipagem base de `id: number` para `id: string` para parear adequadamente com Mongoose ObjectIds, impedindo a quebra do compilador do TypeScript.

---

*Nota: Este histórico continuará a ser populado conforme progredirmos nas próximas fases do Checklist.*
