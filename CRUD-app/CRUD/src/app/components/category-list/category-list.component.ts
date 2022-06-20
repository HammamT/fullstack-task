import { Component, OnInit, Output } from '@angular/core';
import { CategoryServiceService } from '../../category-service.service';
import { Category } from '../../models/category';
import { CATEGORIES } from '../../mock-data/mock-categories';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories?: Category[];
  newCategory?: Category;
  selectedCategorie?: Category;
  testCategory?: Category; 

  constructor(private categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  onSelect(categorie: Category): void {
    this.selectedCategorie = categorie;
  }

  updateCategory(): void {
    this.categoryService.updateCategory(4, {
      id: 4,
      name: 'Angular13',
      descreption:
        'Angular is a platform for building mobile and desktop web applications',
    } as Category);
  }

  deleteCategory(): void {
    this.categoryService.deleteCategory(2).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data as Category[];
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
        descreption: 'Typescript678',
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
