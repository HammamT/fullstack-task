import { Component, OnInit, Output } from '@angular/core';
import { CategoryServiceService } from '../../category-service.service';
import { Categorie } from '../../models/category';
import { CATEGORIES } from '../../mock-data/mock-categories';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css'],
})
export class CategorieListComponent implements OnInit {
  categories?: Categorie[];
  selectedCategorie?: Categorie;
  testCategory?: Categorie;

  constructor(private categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  onSelect(categorie: Categorie): void {
    this.selectedCategorie = categorie;
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = (data as Categorie[]);
        console.log(this.categories.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createCategoty(): void {
    this.categoryService
      .createCategory({
        id: 678,
        name: 'Typescript765',
        descreption:
          'Typescript678',
      })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
