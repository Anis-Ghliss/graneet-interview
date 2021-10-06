import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('villes')
export class Villes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'Code_commune_INSEE', type: 'varchar' })
  INSEE!: string;

  @Column({ name: 'Nom_commune', type: 'varchar', default: null })
  nomCommune!: string;

  @Column({ name: 'Code_postal' })
  codePostal!: number;

  @Column({ name: 'Ligne_5', type: 'varchar' })
  ligne5!: string;

  @Column({ name: 'Libelle_d_acheminement', default: '', type: 'varchar' })
  libelleAcheminement!: string;

  @Column({ name: 'longitude', type: 'float4', default: null })
  longitude!: number;

  @Column({ name: 'latitude', type: 'float4', default: null })
  latitude!: number;
}
