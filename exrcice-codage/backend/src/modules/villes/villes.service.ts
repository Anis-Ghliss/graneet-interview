import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Villes } from 'src/entities/villes.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class VillesService {
  constructor(
    @InjectRepository(Villes) private villesRepo: Repository<Villes>,
  ) {}

  getAll = async (): Promise<Villes[]> => {
    try {
      const villes = await this.villesRepo.find({ take: 100 });
      return villes;
    } catch (err) {
      throw err;
    }
  };

  getByName = async (
    name: string,
  ): Promise<{ metropole: Villes[]; outreMer: Villes[] }> => {
    try {
      const metropole: Villes[] = [];
      const outreMer: Villes[] = [];
      let villes = await this.villesRepo.find({
        nomCommune: Like(`%${name.toUpperCase()}%`),
      });
      if (villes.length > 101) {
        villes = villes.slice(0, 100);
      }
      for (let i = 0; i < villes.length; i++) {
        if (villes[i].latitude === null) {
          outreMer.push(villes[i]);
        } else {
          metropole.push(villes[i]);
        }
      }
      console.log(outreMer, metropole);
      return {
        metropole: metropole,
        outreMer: outreMer,
      };
    } catch (err) {
      throw err;
    }
  };

  getByCode = async (
    code: number,
  ): Promise<{ metropole: Villes[]; outreMer: Villes[] }> => {
    try {
      const metropole: Villes[] = [];
      const outreMer: Villes[] = [];
      let villes = await this.villesRepo.find({
        where: { codePostal: code },
      });
      if (villes.length > 101) {
        villes = villes.slice(0, 100);
      }

      for (let i = 0; i < villes.length; i++) {
        if (villes[i].latitude === null) {
          outreMer.push(villes[i]);
        } else {
          metropole.push(villes[i]);
        }
      }
      console.log(outreMer, metropole);
      return {
        metropole: metropole,
        outreMer: outreMer,
      };
    } catch (err) {
      throw err;
    }
  };
}
