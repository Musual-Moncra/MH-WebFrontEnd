---
title: "Tài liệu học tập toàn diện: Lập trình Angular (Pro Angular)"
tags:
  - angular
  - tai-lieu-hoc-tap
  - pro-angular
  - web-front-end
  - typescript
created: 2026-09-15
updated: 2026-09-15
---

# 📘 Cẩm Nang Học Tập Toàn Diện: Lập Trình Angular (Pro Angular)

> **Tài liệu tham chiếu chuẩn:** *Pro Angular (Second Edition)* – Adam Freeman (Apress).  
> **Mục tiêu tài liệu:** Đúc kết và hệ thống hóa toàn bộ kiến thức cốt lõi, trọng tâm của Angular từ căn bản đến nâng cao; giúp người học nắm vững bản chất kiến trúc, giải phẫu code mẫu chuẩn mực và ứng dụng trực tiếp vào đồ án và dự án thực tế.

---

## 📑 Mục lục tổng quan
1. [Phần 1: Nền tảng Kiến trúc Angular & TypeScript cốt lõi](#phần-1-nền-tảng-kiến-trúc-angular--typescript-cốt-lõi)
2. [Phần 2: Hệ thống Data Binding toàn diện](#phần-2-hệ-thống-data-binding-toàn-diện)
3. [Phần 3: Directives – Điều khiển DOM & Hiển thị động](#phần-3-directives--điều-khiển-dom--hiển-thị-động)
4. [Phần 4: Kiến trúc Components & Giao tiếp đa tầng](#phần-4-kiến-trúc-components--giao-tiếp-đa-tầng)
5. [Phần 5: Pipes – Chuyển đổi và định dạng dữ liệu](#phần-5-pipes--chuyển-đổi-và-định-dạng-dữ-liệu)
6. [Phần 6: Dependency Injection & Services](#phần-6-dependency-injection--services)
7. [Phần 7: Forms & Cơ chế Kiểm định Dữ liệu (Validation)](#phần-7-forms--cơ-chế-kiểm-định-dữ-liệu-validation)
8. [Phần 8: Routing & Điều hướng Single-Page Application](#phần-8-routing--điều-hướng-single-page-application)
9. [Phần 9: Lập trình phản ứng (RxJS) & Tích hợp HTTP REST API](#phần-9-lập-trình-phản-ứng-rxjs--tích-hợp-http-rest-api)
10. [Phần 10: Quản lý Module (NgModules) & Tối ưu hóa dự án](#phần-10-quản-lý-module-ngmodules--tối-ưu-hóa-dự-án)
11. [Phần 11: Kiểm thử đơn vị (Unit Testing) & Triển khai Production](#phần-11-kiểm-thử-đơn-vị-unit-testing--triển-khai-production)
12. [🎯 Bảng tổng kết Checklist kiến thức cốt lõi ôn thi & làm đồ án](#-bảng-tổng-kết-checklist-kiến-thức-cốt-lõi-ôn-thi--làm-đồ-án)

---

## Phần 1: Nền tảng Kiến trúc Angular & TypeScript cốt lõi

### 1.1. Bản chất của Angular: SPA & Mô hình MVC trong Browser
- **Ứng dụng truyền thống (Round-Trip Applications):** Trình duyệt gửi request, server render HTML hoàn chỉnh và trả về. Mỗi tương tác đều tải lại toàn bộ trang (full-page reload), gây tốn băng thông và làm gián đoạn trải nghiệm người dùng.
- **Ứng dụng Single-Page (SPA - Single-Page Application):** Trình duyệt chỉ tải 1 trang HTML ban đầu (`index.html`). Mọi tương tác, chuyển trang, cập nhật dữ liệu sau đó đều được điều khiển bởi JavaScript/TypeScript qua các cuộc gọi bất đồng bộ (Ajax / Fetch / XHR). Giao diện DOM được cập nhật mượt mà không reload trang.
- **Mô hình MVC trong Angular:**
  - **Model:** Chứa dữ liệu nghiệp vụ (Domain Data), trạng thái ứng dụng và logic xử lý dữ liệu (Entity classes, Repositories, Data Sources).
  - **View (Template):** Giao diện người dùng viết bằng HTML mở rộng (chứa Data Bindings, Directives, Pipes).
  - **Controller (Component):** Cầu nối liên kết Model và View. Nhận tương tác từ View, gọi logic xử lý trên Model và cập nhật trạng thái hiển thị.

```
       Người dùng tương tác (Click, Input...)
   ┌──────────────────────────────────────────────┐
   │                                              ▼
┌──────┐          Binding           ┌───────────────────────────┐
│ View │ ◄────────────────────────  │ Component (Controller)    │
│(HTML)│  Cập nhật hiển thị tự động  └─────────────┬─────────────┘
└──────┘                                           │ Gọi nghiệp vụ &
                                                   │ Lấy/Lưu dữ liệu
                                                   ▼
                                            ┌─────────────┐
                                            │    Model    │ ◄─── REST API Backend
                                            │(Repository) │
                                            └─────────────┘
```

---

### 1.2. Các tính năng TypeScript bắt buộc phải nắm vững

#### A. Type Annotations & Type Assertion
TypeScript bổ sung hệ thống kiểm tra kiểu tĩnh (*static typing*) giúp bắt lỗi ngay khi biên dịch:
```typescript
let productName: string = "Kayak";
let productPrice: number = 275.5;
let isAvailable: boolean = true;

// Union Types (Kiểu kết hợp)
let id: number | string = 101;
id = "PRD-101"; // Hợp lệ

// Type Assertion (Ép kiểu)
let val: any = "50";
let numericVal: number = parseFloat(<string>val); // Hoặc: (val as string)
```

#### B. Rút gọn khai báo Class & Constructor
TypeScript cho phép khai báo thuộc tính lớp trực tiếp trong tham số constructor bằng các từ khóa truy cập (`public`, `private`, `protected`):
```typescript
export class Product {
  // Tự động tạo và gán 4 thuộc tính id, name, category, price
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public price?: number
  ) {}
}
```

#### C. Decorators (Bộ trang trí Metadata)
Decorator bắt đầu bằng ký tự `@`, cung cấp metadata cho Angular nhận biết vai trò của class:
- `@Component`: Khai báo Component.
- `@Directive`: Khai báo Directive.
- `@Pipe`: Khai báo Pipe.
- `@Injectable`: Khai báo Service tham gia Dependency Injection.
- `@NgModule`: Khai báo Module.

---

### 1.3. Giải phẫu luồng khởi động (Bootstrapping Flow) của Angular
1. Trình duyệt tải `index.html`.
2. File `main.ts` được thực thi, sử dụng `platformBrowserDynamic().bootstrapModule(AppModule)` để nạp **Root Module**.
3. `AppModule` quét thuộc tính `bootstrap: [AppComponent]`, xác định `AppComponent` là **Root Component**.
4. Angular tìm thẻ `<app>` (selector của `AppComponent`) trong `index.html`, render template tương ứng và bắt đầu vòng lặp xử lý sự kiện / change detection.

---

## Phần 2: Hệ thống Data Binding toàn diện

Data Binding là cơ chế thiết lập cầu nối dữ liệu hai chiều giữa Component (TypeScript) và Template (HTML). Angular chia làm 4 loại binding chính:

| Hình thức Binding | Cú pháp | Chiều dữ liệu | Mục đích sử dụng |
| :--- | :---: | :---: | :--- |
| **Interpolation** | `{{ expression }}` | Component ➔ View | Xuất giá trị chuỗi vào nội dung văn bản thẻ. |
| **Property Binding** | `[property]="expr"` | Component ➔ View | Gán giá trị vào thuộc tính DOM của thẻ. |
| **Attribute Binding** | `[attr.name]="expr"` | Component ➔ View | Gán giá trị vào thuộc tính HTML không có ánh xạ DOM (như `colspan`). |
| **Class Binding** | `[class.name]="expr"` | Component ➔ View | Bật/tắt class CSS theo điều kiện boolean. |
| **Style Binding** | `[style.name]="expr"` | Component ➔ View | Thiết lập trực tiếp giá trị CSS inline. |
| **Event Binding** | `(event)="handler($event)"` | View ➔ Component | Bắt sự kiện người dùng (click, input, submit...). |
| **Two-way Binding** | `[(ngModel)]="property"` | Hai chiều (⇄) | Đồng bộ dữ liệu 2 chiều lập tức giữa form và model. |

### 2.1. Cú pháp & Ví dụ chi tiết

```html
<!-- 1. Interpolation -->
<h3>Xin chào {{ getCustomerName() }}, giỏ hàng có {{ cart.count }} món.</h3>

<!-- 2. Property & Attribute Binding -->
<input class="form-control" [value]="product.name" [disabled]="isLocked" />
<td [attr.colspan]="columnSpanValue">Nội dung trải dài</td>

<!-- 3. Class & Style Binding -->
<!-- Gán cả chuỗi class -->
<div [class]="getClassString()">Nội dung</div>
<!-- Bật/tắt 1 class cụ thể -->
<div [class.bg-success]="product.price < 50" [class.bg-danger]="product.price >= 50">
  Giá: {{ product.price }}
</div>
<!-- Thiết lập Style có đơn vị -->
<span [style.font-size.px]="fontSize" [style.color]="isWarning ? 'red' : 'black'">
  Cảnh báo
</span>

<!-- 4. Event Binding -->
<button class="btn btn-primary" (click)="saveProduct($event)">Lưu lại</button>

<!-- 5. Two-Way Data Binding (Banana-in-a-box) -->
<input class="form-control" [(ngModel)]="product.name" />
```

> [!WARNING] **Nguyên tắc Idempotent trong biểu thức Template:**
> Các biểu thức trong One-way binding (`{{ }}`, `[ ]`) phải có tính **Idempotent** (bất biến: thực thi nhiều lần với cùng input phải trả về cùng output, không làm thay đổi trạng thái ứng dụng như gán biến `=`, toán tử tăng giảm `++`, `--`). Angular sẽ quét kiểm tra lại trong chế độ Dev và quăng lỗi `ExpressionChangedAfterItHasBeenCheckedError` nếu biểu thức sinh tác dụng phụ (side-effects).

---

## Phần 3: Directives – Điều khiển DOM & Hiển thị động

Directive là các lệnh mở rộng HTML, can thiệp vào hành vi hoặc cấu trúc của các phần tử DOM.

### 3.1. Phân loại Directives
1. **Component:** Directive đặc biệt có gắn kèm giao diện (Template riêng).
2. **Structural Directives (Directive cấu trúc):** Thay đổi cấu trúc DOM bằng cách thêm/xóa phần tử. Cú pháp viết tắt luôn có dấu `*` ở đầu (`*ngIf`, `*ngFor`, `*ngSwitchCase`).
3. **Attribute Directives (Directive thuộc tính):** Thay đổi diện mạo hoặc hành vi của một phần tử DOM sẵn có (`ngClass`, `ngStyle`, Custom Attribute Directive).

---

### 3.2. Built-in Structural Directives

#### A. `*ngIf`: Thêm / Xóa phần tử theo điều kiện
```html
<div *ngIf="products.length > 0; else emptyBlock">
  Có {{ products.length }} sản phẩm trong kho.
</div>
<ng-template #emptyBlock>
  <div class="alert alert-warning">Kho hàng hiện đang trống!</div>
</ng-template>
```
*Lưu ý:* `*ngIf` thực sự hủy bỏ (destroy) và tạo mới (create) phần tử trong DOM, khác với việc ẩn bằng CSS `display: none`.

#### B. `*ngFor`: Lặp danh sách & Các biến ngữ cảnh
```html
<table class="table table-bordered">
  <thead>
    <tr>
      <th>STT</th>
      <th>Tên</th>
      <th>Giá</th>
      <th>Vị trí</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of products; 
                let i = index; 
                let isOdd = odd; 
                let isEven = even; 
                let isFirst = first; 
                let isLast = last; 
                trackBy: trackById"
        [class.table-info]="isOdd" 
        [class.table-warning]="isEven">
      <td>{{ i + 1 }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price | currency:'USD' }}</td>
      <td>
        <span *ngIf="isFirst" class="badge badge-success">Đầu</span>
        <span *ngIf="isLast" class="badge badge-danger">Cuối</span>
      </td>
    </tr>
  </tbody>
</table>
```

> [!TIP] **Tối ưu hóa hiệu năng với `trackBy`:**
> Mặc định, khi mảng dữ liệu được tải lại từ API, Angular sẽ xóa hết các dòng DOM cũ và render lại toàn bộ (dù dữ liệu bên trong không đổi). Bằng cách cung cấp hàm `trackBy: trackById(index, item) { return item.id; }`, Angular chỉ tái cấu trúc đúng những phần tử có `id` thay đổi hoặc di chuyển, nâng cao hiệu năng vượt bậc.

#### C. `[ngSwitch]`: Rẽ nhánh hiển thị
```html
<div [ngSwitch]="product.category">
  <span *ngSwitchCase="'Watersports'" class="badge badge-primary">Dưới nước</span>
  <span *ngSwitchCase="'Soccer'" class="badge badge-success">Bóng đá</span>
  <span *ngSwitchCase="'Chess'" class="badge badge-secondary">Cờ vua</span>
  <span *ngSwitchDefault class="badge badge-light">Loại khác</span>
</div>
```

---

### 3.3. Built-in Attribute Directives

#### `ngClass` & `ngStyle`
Quản lý nhiều class hoặc style động cùng lúc thông qua Object Map:
```html
<!-- ngClass với Map Object: class được bật khi giá trị là true -->
<div [ngClass]="{
  'bg-success text-white': product.price < 50,
  'bg-warning text-dark': product.price >= 50 && product.price <= 200,
  'bg-danger text-white': product.price > 200
}">
  {{ product.name }}
</div>

<!-- ngStyle với Map Object -->
<div [ngStyle]="{
  'font-size.px': fontSizeValue,
  'color': isSpecial ? 'blue' : 'gray',
  'font-weight': isImportant ? 'bold' : 'normal'
}">
  Mô tả sản phẩm
</div>
```

---

### 3.4. Xây dựng Custom Directive chuẩn mực

#### A. Custom Attribute Directive (Ví dụ: Đổi màu nền & lắng nghe sự kiện)
```typescript
import { Directive, ElementRef, Input, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[paHighlight]" // Sử dụng như 1 thuộc tính: <div paHighlight="yellow">
})
export class HighlightDirective {
  // Nhận giá trị màu truyền vào, mặc định là yellow
  @Input("paHighlight") highlightColor: string = "yellow";

  // Ràng buộc trực tiếp thuộc tính CSS backgroundColor của thẻ host
  @HostBinding("style.backgroundColor") currentBgColor: string = "";

  // Lắng nghe sự kiện chuột rê vào thẻ host
  @HostListener("mouseenter") onMouseEnter() {
    this.currentBgColor = this.highlightColor || "yellow";
  }

  // Lắng nghe sự kiện chuột rời khỏi thẻ host
  @HostListener("mouseleave") onMouseLeave() {
    this.currentBgColor = "";
  }
}
```

#### B. Custom Structural Directive (Bản chất Micro-Template)
Khi ta viết `*paIf="condition"`, Angular ngầm mở rộng thành:
```html
<ng-template [paIf]="condition">
  <!-- Nội dung bên trong -->
</ng-template>
```
Code triển khai Directive cấu trúc:
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[paIf]"
})
export class CustomIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,       // Đại diện cho nội dung bên trong <ng-template>
    private viewContainer: ViewContainerRef     // Đại diện cho vị trí đặt view trong DOM
  ) {}

  @Input("paIf") set condition(value: boolean) {
    if (value) {
      // Chèn view vào container
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Xóa view khỏi container
      this.viewContainer.clear();
    }
  }
}
```

---

## Phần 4: Kiến trúc Components & Giao tiếp đa tầng

Component là viên gạch nền tảng của mọi ứng dụng Angular. Ứng dụng thực tế là một cây phân cấp các Component (Component Tree).

### 4.1. Giải phẫu cấu hình `@Component`
```typescript
@Component({
  selector: "app-product-table",           // Tên thẻ HTML đại diện
  moduleId: module.id,                     // Hỗ trợ đường dẫn tương đối
  templateUrl: "./product-table.html",     // File giao diện HTML
  styleUrls: ["./product-table.css"],      // File CSS cục bộ
  encapsulation: ViewEncapsulation.Emulated // Đóng gói style (tránh tràn style ra ngoài)
})
export class ProductTableComponent { /* ... */ }
```

---

### 4.2. Cơ chế Giao tiếp giữa các Component (Component Communication)

#### Mô hình 1: Cha truyền dữ liệu xuống Con (`@Input`)
- **Component Con:** Khai báo nhận thuộc tính:
  ```typescript
  export class ProductDetailComponent {
    @Input() product: Product;
    @Input("discountRate") discount: number = 0; // Alias tên thuộc tính
  }
  ```
- **Component Cha:** Truyền dữ liệu qua Property Binding:
  ```html
  <app-product-detail [product]="selectedProduct" [discountRate]="15"></app-product-detail>
  ```

#### Mô hình 2: Con bắn sự kiện lên Cha (`@Output` & `EventEmitter`)
- **Component Con:** Khai báo EventEmitter:
  ```typescript
  export class ProductDetailComponent {
    @Output() onDelete = new EventEmitter<number>();

    triggerDelete(id: number) {
      this.onDelete.emit(id); // Phát sự kiện kèm payload
    }
  }
  ```
- **Component Cha:** Lắng nghe qua Event Binding:
  ```html
  <app-product-detail (onDelete)="handleProductDeletion($event)"></app-product-detail>
  ```

#### Mô hình 3: Cha truy vấn Con qua Template Reference & `@ViewChild`
- Trong template cha dùng biến `#table`:
  ```html
  <app-product-table #tableRef></app-product-table>
  <button (click)="tableRef.refresh()">Làm mới</button>
  ```
- Hoặc truy cập trực tiếp trong file code TypeScript của Cha:
  ```typescript
  export class ParentComponent implements AfterViewInit {
    @ViewChild(ProductTableComponent) childTable: ProductTableComponent;

    ngAfterViewInit() {
      console.log("Tìm thấy component con:", this.childTable);
    }
  }
  ```

#### Mô hình 4: Phép chiếu nội dung (Content Projection với `<ng-content>`)
Cho phép Component đóng gói khung ngoài và nhận nội dung HTML tùy biến từ bên ngoài truyền vào:
- **Component Khung (`paToggleView`):**
  ```html
  <div class="card p-a-1">
    <button class="btn btn-info" (click)="toggle()">Ẩn / Hiện</button>
    <div *ngIf="visible">
      <!-- Vị trí nội dung ngoài được chiếu vào -->
      <ng-content></ng-content>
    </div>
  </div>
  ```
- **Sử dụng từ component Cha:**
  ```html
  <paToggleView>
    <!-- Nội dung này sẽ rơi vào đúng vị trí <ng-content> -->
    <app-product-table [products]="productList"></app-product-table>
  </paToggleView>
  ```

---

### 4.3. Vòng đời của Component (Lifecycle Hooks)
Angular tạo, render, kiểm tra thay đổi và hủy component qua các giai đoạn rõ ràng:

```
┌───────────────────────────┐
│        Constructor        │ ➔ Khởi tạo đối tượng Class, tiêm Dependency
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│        ngOnChanges        │ ➔ Chạy khi có @Input nhận giá trị mới (chạy cả trước ngOnInit)
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│         ngOnInit          │ ➔ Khởi tạo dữ liệu chính (gọi API, thiết lập cấu hình)
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│         ngDoCheck         │ ➔ Tự bắt thay đổi thủ công (nếu change detection bỏ sót)
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│    ngAfterContentInit     │ ➔ Nội dung chiếu qua <ng-content> đã khởi tạo xong
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│     ngAfterViewInit       │ ➔ View và các @ViewChild/@ViewChildren đã render xong
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│        ngOnDestroy        │ ➔ Dọn dẹp tài nguyên (unsubscribe Observable, clear timer)
└───────────────────────────┘
```

---

## Phần 5: Pipes – Chuyển đổi và định dạng dữ liệu

Pipe dùng để lọc, định dạng dữ liệu hiển thị trên Template mà không làm thay đổi dữ liệu gốc trong Model. Cú pháp sử dụng ký tự gạch đứng `|`.

### 5.1. Các Built-in Pipes thông dụng
```html
<!-- 1. Currency Pipe: mã tiền tệ, hiển thị ký hiệu, định dạng số thập phân -->
{{ product.price | currency:'USD':true:'2.2-2' }}  <!-- Kết quả: $275.00 -->

<!-- 2. Date Pipe: định dạng thời gian -->
{{ orderDate | date:'fullDate' }}      <!-- Tuesday, September 15, 2026 -->
{{ orderDate | date:'dd/MM/yyyy HH:mm' }} <!-- 15/09/2026 08:30 -->

<!-- 3. Number & Percent Pipe -->
{{ 3.141592 | number:'1.2-2' }}       <!-- 3.14 -->
{{ 0.75 | percent }}                   <!-- 75% -->

<!-- 4. UpperCase & LowerCase Pipe -->
{{ product.name | uppercase }}         <!-- KAYAK -->
{{ product.category | lowercase }}     <!-- watersports -->

<!-- 5. JSON Pipe (Đặc biệt hữu ích để debug object trực tiếp trên giao diện) -->
<pre>{{ product | json }}</pre>

<!-- 6. Slice Pipe: Cắt chuỗi hoặc mảng -->
<li *ngFor="let p of products | slice:0:3">{{ p.name }}</li>

<!-- 7. Async Pipe (Xem chi tiết ở Phần 9) -->
<div>{{ productStream$ | async }}</div>
```

### 5.2. Chaining Pipes (Nối nhiều Pipe)
Dữ liệu được chuyển đổi tuần tự từ trái qua phải:
```html
{{ product.price | addTax:10 | currency:'USD':true }}
```

---

### 5.3. Xây dựng Custom Pipe (Pure vs. Impure Pipe)

#### A. Pure Pipe (Mặc định `pure: true`)
Chỉ tính toán lại khi **giá trị nguyên thủy** thay đổi, hoặc **tham chiếu object** thay đổi. Hiệu năng cực cao.
```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addTax",
  pure: true
})
export class AddTaxPipe implements PipeTransform {
  defaultRate: number = 10;

  transform(price: number, rate?: number): number {
    let effectiveRate = rate !== undefined ? rate : this.defaultRate;
    return price + (price * effectiveRate / 100);
  }
}
```

#### B. Impure Pipe (`pure: false`)
Chạy lại trong **mọi chu kỳ Change Detection**, thích hợp khi cần lọc dữ liệu trong mảng bị thêm/xóa phần tử nội bộ:
```typescript
@Pipe({
  name: "filterByCategory",
  pure: false // Bắt buộc false nếu muốn phát hiện khi mảng products bị push/splice
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: Product[], category: string): Product[] {
    if (!products || !category) return products;
    return products.filter(p => p.category === category);
  }
}
```

---

## Phần 6: Dependency Injection & Services

### 6.1. Tại sao phải dùng Services & Dependency Injection (DI)?
- **Giải quyết bài toán phân phối đối tượng (Object Distribution Problem):** Nếu không có DI, để chia sẻ một instance dữ liệu giữa các component nằm xa nhau trên cây phân cấp, ta phải truyền qua hàng loạt Component trung gian bằng `@Input()`.
- **Loose Coupling (Giảm độ phụ thuộc cứng):** Thay vì tự khởi tạo bằng `new ProductRepository()`, Component yêu cầu Service qua constructor. Khi cần thay thế Service giả lập (Mock Service) để kiểm thử hoặc đổi cơ chế lưu trữ (In-memory sang REST API), ta chỉ cần đổi cấu hình mà không cần sửa code của Component.

---

### 6.2. Tạo Service với `@Injectable()`
```typescript
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class CartService {
  private lines: { product: Product; quantity: number }[] = [];

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find(l => l.product.id === product.id);
    if (line) {
      line.quantity += quantity;
    } else {
      this.lines.push({ product, quantity });
    }
  }

  get totalItems(): number {
    return this.lines.reduce((total, l) => total + l.quantity, 0);
  }

  clear() {
    this.lines = [];
  }
}
```

---

### 6.3. Cấu hình Providers & Các hình thức cung cấp Service
Trong Module hoặc Component, ta khai báo cách khởi tạo Service thông qua mảng `providers`:

```typescript
providers: [
  // 1. Cú pháp viết tắt (Class Provider chuẩn)
  CartService, 
  // Tương đương: { provide: CartService, useClass: CartService }

  // 2. Class Provider: Khi cần thay thế một class bằng một class con khác
  { provide: DataService, useClass: RestDataService },

  // 3. Value Provider: Cung cấp một giá trị tĩnh hoặc đối tượng cấu hình
  { provide: "API_URL", useValue: "https://api.example.com/products" },

  // 4. Factory Provider: Khởi tạo service thông qua hàm logic tùy biến kèm dependency
  {
    provide: LoggerService,
    deps: ["API_URL"],
    useFactory: (apiUrl: string) => {
      let logger = new LoggerService();
      logger.setEndpoint(apiUrl);
      return logger;
    }
  },

  // 5. Existing Provider: Định danh alias cho một service đã có
  { provide: "OldLogger", useExisting: LoggerService }
]
```

---

### 6.4. Thứ bậc Injector (Hierarchical Injector System)
Angular tìm kiếm Provider theo thứ tự từ dưới lên trên:
1. **Component Local Injector (`providers: [...]` trong Component):** Khởi tạo một instance **mới riêng biệt** cho mỗi component đó (và các component con của nó).
2. **ViewProviders (`viewProviders: [...]`):** Giới hạn chỉ cung cấp cho View Children, không cấp cho Content Children chiếu qua `<ng-content>`.
3. **Parent Component Injector:** Tìm lên Component cha nếu cấp hiện tại không có.
4. **Root Module Injector (`AppModule`):** Singleton dùng chung trên toàn bộ ứng dụng.

**Các Decorator điều khiển luồng tìm kiếm:**
- `@Optional()`: Nếu không tìm thấy Service thì gán `null`, không báo lỗi Exception.
- `@Host()`: Dừng tìm kiếm tại Component Host gần nhất.
- `@SkipSelf()`: Bỏ qua Injector của chính nó, bắt đầu tìm từ Component cha trở lên.

```typescript
constructor(
  @Optional() private logger: LoggerService,
  @SkipSelf() @Inject("API_URL") private apiUrl: string
) {}
```

---

## Phần 7: Forms & Cơ chế Kiểm định Dữ liệu (Validation)

Angular cung cấp 2 mô hình làm việc với biểu mẫu: **Template-Driven Forms** (định nghĩa logic tại HTML) và **Reactive / Model-Driven Forms** (định nghĩa cấu trúc và logic biểu mẫu hoàn toàn bằng TypeScript).

### 7.1. Bảng so sánh 2 mô hình Form

| Tiêu chí | Template-Driven Forms | Reactive / Model-Driven Forms |
| :--- | :--- | :--- |
| **Module bắt buộc** | `FormsModule` | `ReactiveFormsModule` |
| **Nơi định nghĩa logic** | Trực tiếp trong Template HTML (thẻ `<form>`, `[(ngModel)]`) | File Component TypeScript (`FormGroup`, `FormControl`) |
| **Khả năng kiểm thử (Unit test)** | Khó kiểm thử độc lập (phụ thuộc DOM) | Cực kỳ dễ dàng kiểm thử không cần render DOM |
| **Xử lý Form phức tạp** | Khó mở rộng khi form có nhiều trường động | Rất mạnh mẽ, hỗ trợ form động, validate chéo nhiều trường |
| **Khuyên dùng** | Form đăng nhập đơn giản, ít trường | Mọi biểu mẫu nghiệp vụ thực tế, form quản trị |

---

### 7.2. Template-Driven Forms
```html
<form #productForm="ngForm" (ngSubmit)="submitProduct(productForm)" novalidate>
  <div class="form-group">
    <label>Tên sản phẩm:</label>
    <input class="form-control" name="name" 
           [(ngModel)]="newProduct.name" 
           #nameModel="ngModel"
           required minlength="5" />
           
    <!-- Kiểm tra lỗi -->
    <div *ngIf="nameModel.invalid && (nameModel.dirty || productForm.submitted)" class="text-danger">
      <span *ngIf="nameModel.errors?.required">Tên không được để trống.</span>
      <span *ngIf="nameModel.errors?.minlength">Tối thiểu 5 ký tự.</span>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="productForm.invalid">
    Thêm sản phẩm
  </button>
</form>
```

---

### 7.3. Reactive Forms (Model-Driven Forms) chuẩn mực

#### Bước 1: Khởi tạo FormGroup trong TypeScript
```typescript
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LimitValidator } from "./limit.validator";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html"
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[A-Za-z ]+$")
      ]),
      category: new FormControl("", Validators.required),
      price: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
        LimitValidator.maxPrice(1000) // Custom Validator
      ])
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log("Dữ liệu form hợp lệ:", this.productForm.value);
      this.productForm.reset();
    }
  }
}
```

#### Bước 2: Ràng buộc vào Template HTML
```html
<form [formGroup]="productForm" (ngSubmit)="onSubmit()" novalidate>
  <div class="form-group">
    <label>Tên sản phẩm</label>
    <input class="form-control" formControlName="name" />
    <span *ngIf="productForm.get('name').invalid && productForm.get('name').touched" class="text-danger">
      Tên không hợp lệ.
    </span>
  </div>

  <div class="form-group">
    <label>Danh mục</label>
    <input class="form-control" formControlName="category" />
  </div>

  <div class="form-group">
    <label>Giá</label>
    <input class="form-control" formControlName="price" />
    <span *ngIf="productForm.get('price').errors?.limitExceeded" class="text-danger">
      Giá không được vượt quá {{ productForm.get('price').errors.limitExceeded.max }}.
    </span>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="productForm.invalid">
    Lưu sản phẩm
  </button>
</form>
```

#### Bước 3: Viết Custom Validator
```typescript
import { FormControl, ValidationErrors } from "@angular/forms";

export class LimitValidator {
  static maxPrice(limit: number) {
    return (control: FormControl): ValidationErrors | null => {
      let val = Number(control.value);
      if (!isNaN(val) && val > limit) {
        return { limitExceeded: { max: limit, actual: val } };
      }
      return null; // Hợp lệ trả về null
    };
  }
}
```

---

## Phần 8: Routing & Điều hướng Single-Page Application

Routing cho phép ánh xạ từ đường dẫn URL trên trình duyệt sang Component tương ứng mà không cần tải lại toàn bộ trang web.

### 8.1. Thiết lập Cấu hình Routes & Router Outlet

```typescript
// app.routing.ts
import { Routes, RouterModule } from "@angular/router";
import { ProductTableComponent } from "./core/table.component";
import { ProductFormComponent } from "./core/form.component";
import { NotFoundComponent } from "./core/notFound.component";

const routes: Routes = [
  // 1. Route cơ bản
  { path: "table", component: ProductTableComponent },

  // 2. Route có tham số (Route Parameters)
  { path: "form/:mode/:id", component: ProductFormComponent },
  { path: "form/:mode", component: ProductFormComponent },

  // 3. Redirection (Chuyển hướng đường dẫn mặc định)
  { path: "", redirectTo: "/table", pathMatch: "full" },

  // 4. Wildcard Route (Bắt toàn bộ link không tồn tại -> 404)
  { path: "**", component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
```

Đặt thẻ `<router-outlet></router-outlet>` tại nơi muốn hiển thị component được route kích hoạt:
```html
<!-- app.component.html -->
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" routerLink="/">Cửa Hàng Thể Thao</a>
</nav>
<div class="container m-t-1">
  <router-outlet></router-outlet>
</div>
```

---

### 8.2. Điều hướng qua Template & Điều hướng bằng Code

#### A. Trong Template HTML
```html
<!-- Điều hướng đơn giản -->
<button routerLink="/table" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
  Danh sách
</button>

<!-- Điều hướng có tham số mảng -->
<button [routerLink]="['/form', 'edit', product.id]">Chỉnh sửa</button>
```

#### B. Trong Code TypeScript (`Router` service)
```typescript
import { Router } from "@angular/router";

export class ActionComponent {
  constructor(private router: Router) {}

  goToCheckout() {
    this.router.navigateByUrl("/checkout");
    // Hoặc: this.router.navigate(['/form', 'edit', 5]);
  }
}
```

---

### 8.3. Đọc Tham số Route (`ActivatedRoute`)
```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({ /* ... */ })
export class FormComponent implements OnInit {
  productId: number;
  isEditMode: boolean = false;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    // Cách 1: Đọc một lần tại thời điểm khởi tạo (Snapshot)
    this.isEditMode = this.activeRoute.snapshot.params["mode"] === "edit";
    this.productId = Number(this.activeRoute.snapshot.params["id"]);

    // Cách 2: Lắng nghe liên tục qua Observable (Khi route thay đổi mà không hủy component)
    this.activeRoute.params.subscribe(params => {
      this.isEditMode = params["mode"] === "edit";
      this.productId = Number(params["id"]);
    });
  }
}
```

---

### 8.4. Route Guards (Người gác cổng Định tuyến)
Guards bảo vệ hệ thống điều hướng, kiểm tra quyền hạn trước khi cho phép vào hoặc rời khỏi trang.

| Tên Guard | Interface tương ứng | Mục đích sử dụng |
| :--- | :--- | :--- |
| **CanActivate** | `CanActivate` | Kiểm tra điều kiện (ví dụ: đăng nhập) trước khi vào route. |
| **CanActivateChild** | `CanActivateChild` | Kiểm tra điều kiện cho tất cả các route con. |
| **CanDeactivate** | `CanDeactivate` | Ngăn người dùng vô tình rời trang khi chưa lưu form. |
| **Resolve** | `Resolve` | Tải xong dữ liệu trước rồi mới kích hoạt hiển thị giao diện. |
| **CanLoad** | `CanLoad` | Ngăn chặn tải file code của Lazy Loaded Module nếu chưa đủ quyền. |

#### Ví dụ: `CanDeactivate` chống mất dữ liệu khi rời trang
```typescript
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { FormComponent } from "./form.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent): boolean {
    if (component.productForm.dirty) {
      return confirm("Bạn có thay đổi chưa lưu! Bạn có chắc chắn muốn rời khỏi trang này?");
    }
    return true;
  }
}
```
Đăng ký vào file route:
```typescript
{ path: "form/:mode", component: FormComponent, canDeactivate: [UnsavedChangesGuard] }
```

---

## Phần 9: Lập trình phản ứng (RxJS) & Tích hợp HTTP REST API

### 9.1. Các khái niệm cốt lõi của RxJS trong Angular
- **Observable (Dòng dữ liệu):** Đại diện cho một tập hợp các giá trị hoặc sự kiện được phát ra trong tương lai (bất đồng bộ). Khác với Promise chỉ trả về 1 giá trị duy nhất rồi kết thúc, Observable có thể phát ra liên tục chuỗi nhiều giá trị theo thời gian.
- **Observer (Bên theo dõi):** Đối tượng chứa các hàm callback để xử lý dòng dữ liệu: `next(value)`, `error(err)`, `complete()`.
- **Subscription:** Quá trình kết nối một Observer vào Observable qua lệnh `.subscribe()`.
- **Subject:** Một dạng đặc biệt của Observable nhưng vừa có thể làm Observer (phát dữ liệu qua `.next()`) vừa làm Observable (cho nơi khác `.subscribe()`).

---

### 9.2. Các RxJS Operators thông dụng
```typescript
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

// Chuyển đổi dữ liệu (map), lọc (filter) và xử lý lỗi (catch)
getDataStream(): Observable<Product[]> {
  return this.http.get(this.apiUrl)
    .map(res => res.json())                               // Biến đổi Response thành JSON
    .filter(products => products.length > 0)             // Bỏ qua nếu mảng rỗng
    .catch(error => {
      console.error("Lỗi mạng:", error);
      return Observable.throw("Không thể kết nối máy chủ.");
    });
}
```

---

### 9.3. Giao tiếp RESTful API hoàn chỉnh với HTTP Service

Triển khai một Service quản lý tương tác mạng chuẩn CRUD (Create, Read, Update, Delete):

```typescript
import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class RestDataSource {
  private baseUrl: string = "http://localhost:3500/products";

  constructor(private http: Http) {}

  // 1. GET ALL
  getProducts(): Observable<Product[]> {
    return this.sendRequest(RequestMethod.Get, this.baseUrl);
  }

  // 2. POST (Create)
  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Post, this.baseUrl, product);
  }

  // 3. PUT (Update hoàn toàn)
  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Put, `${this.baseUrl}/${product.id}`, product);
  }

  // 4. DELETE
  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest(RequestMethod.Delete, `${this.baseUrl}/${id}`);
  }

  // Hàm điều phối request tập trung
  private sendRequest(verb: RequestMethod, url: string, body?: Product): Observable<any> {
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });

    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body ? JSON.stringify(body) : null,
      headers: headers
    }))
    .map((res: Response) => res.json())
    .catch((err: Response) => {
      return Observable.throw(`Lỗi máy chủ: ${err.statusText} (${err.status})`);
    });
  }
}
```

---

### 9.4. Sử dụng `AsyncPipe` (`| async`) để chống rò rỉ bộ nhớ
Khi subscribe thủ công trong code TypeScript, ta phải luôn nhớ gọi `unsubscribe()` trong `ngOnDestroy`. Nếu không làm điều này, kết nối sẽ vẫn tồn tại trong RAM ngay cả khi component đã bị hủy, dẫn đến rò rỉ bộ nhớ (**Memory Leak**).

**Giải pháp tối ưu:** Sử dụng `AsyncPipe` trực tiếp trên template. Angular sẽ tự động subscribe và tự hủy subscription khi component bị destroy!

```typescript
export class ProductListComponent {
  // Chỉ lưu trữ đối tượng Observable (thường đặt đuôi $)
  products$: Observable<Product[]> = this.restService.getProducts();

  constructor(private restService: RestDataSource) {}
}
```
Trong HTML template:
```html
<table class="table">
  <tr *ngFor="let item of products$ | async">
    <td>{{ item.name }}</td>
    <td>{{ item.price | currency:'USD' }}</td>
  </tr>
</table>
```

---

## Phần 10: Quản lý Module (NgModules) & Tối ưu hóa dự án

### 10.1. Cấu trúc 1 NgModule chuẩn
```typescript
@NgModule({
  imports: [
    // Các Module khác mà module này phụ thuộc (BrowserModule, FormsModule, v.v.)
    CommonModule,
    FormsModule
  ],
  declarations: [
    // Các Component, Directive, Pipe thuộc về module này
    ProductTableComponent,
    ProductFormComponent,
    AddTaxPipe
  ],
  exports: [
    // Công khai các Component, Directive, Pipe cho module khác sử dụng
    ProductTableComponent,
    AddTaxPipe
  ],
  providers: [
    // Đăng ký Service ở cấp Module (Global hoặc Scoped)
    ProductRepository
  ]
})
export class ProductFeatureModule {}
```

---

### 10.2. Kỹ thuật Tải Chậm Module (Lazy Loading)
Mặc định, toàn bộ code ứng dụng sẽ bị đóng gói vào 1 file JS lớn duy nhất. Người dùng phải tải toàn bộ trang quản trị (Admin) dù họ chỉ là khách mua hàng thông thường.  
**Lazy Loading** chia nhỏ các tính năng thành các file riêng biệt (chunks) và chỉ tải về khi người dùng click điều hướng vào URL đó.

#### Cấu hình Route Lazy Loading:
```typescript
// app.routing.ts
const routes: Routes = [
  { path: "store", component: StoreComponent },
  
  // Khi người dùng truy cập /admin, Angular mới tải file admin.module
  {
    path: "admin",
    loadChildren: "app/admin/admin.module#AdminModule",
    canLoad: [AdminAuthGuard] // Tùy chọn: chặn tải file nếu chưa đăng nhập
  },
  { path: "", redirectTo: "/store", pathMatch: "full" }
];
```

#### Cấu hình Route con bên trong Feature Module được tải chậm:
```typescript
// admin.module.ts
const adminRoutes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "dashboard", component: AdminDashboardComponent },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule.forChild(adminRoutes) // Bắt buộc dùng forChild cho feature module
  ],
  declarations: [AuthComponent, AdminDashboardComponent]
})
export class AdminModule {}
```

---

## Phần 11: Kiểm thử đơn vị (Unit Testing) & Triển khai Production

### 11.1. Công cụ & Khung kiểm thử: Jasmine & Karma
- **Jasmine:** Thư viện viết kịch bản kiểm thử hành vi (BDD - Behavior-Driven Development) với cú pháp `describe`, `beforeEach`, `it`, `expect`, `toBe`.
- **Karma:** Công cụ test runner tự động mở trình duyệt ngầm, thực thi các file test (`.spec.ts`) và xuất báo cáo kết quả.
- **TestBed:** Lớp giả lập môi trường Angular Module riêng biệt cho từng bài test.

```typescript
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ProductTableComponent } from "./table.component";
import { Model } from "../model/repository.model";
import { By } from "@angular/platform-browser";

describe("Kiểm thử ProductTableComponent", () => {
  let fixture: ComponentFixture<ProductTableComponent>;
  let component: ProductTableComponent;

  // Khởi tạo Mock Service giả lập dữ liệu
  let mockModel = {
    getProducts: () => [
      { id: 1, name: "Kayak", category: "Watersports", price: 275 },
      { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTableComponent],
      providers: [
        { provide: Model, useValue: mockModel } // Tiêm mock service thay thế service thật
      ]
    });

    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ép Angular chạy Change Detection render template
  });

  it("Component phải được khởi tạo thành công", () => {
    expect(component).toBeTruthy();
  });

  it("Bảng phải render chính xác số lượng sản phẩm", () => {
    // Quét tìm các thẻ <tr> trong DOM của component
    let rows = fixture.debugElement.queryAll(By.css("tbody tr"));
    expect(rows.length).toBe(2);
  });
});
```

---

### 11.2. Biên dịch Production: JIT vs. AoT Compilation

| Tiêu chí | JIT (Just-in-Time Compilation) | AoT (Ahead-of-Time Compilation) |
| :--- | :--- | :--- |
| **Thời điểm biên dịch** | Biên dịch Template HTML sang JavaScript **ngay trên trình duyệt** của người dùng khi trang web tải xong. | Biên dịch toàn bộ Template HTML sang JavaScript **ngay tại máy chủ lúc build**. |
| **Kích thước gói nạp** | Lớn (phải tải kèm cả bộ biên dịch `@angular/compiler` khoảng ~1MB). | Nhỏ hơn rất nhiều (loại bỏ hoàn toàn compiler khỏi file nạp). |
| **Tốc độ hiển thị ban đầu** | Chậm hơn vì trình duyệt mất thời gian phân tích và biên dịch template. | Nhanh hơn gấp 2–3 lần vì trình duyệt chỉ việc thực thi trực tiếp mã JavaScript thuần. |
| **Bắt lỗi Template** | Lỗi binding/cú pháp chỉ xuất hiện lúc người dùng bấm vào chạy trang. | Bắt toàn bộ lỗi cú pháp template ngay lúc build code (`ng build --prod`). |
| **Mục đích sử dụng** | Quá trình phát triển cục bộ (Development). | Đóng gói phát hành chính thức (Production). |

---

## 🎯 Bảng tổng kết Checklist kiến thức cốt lõi ôn thi & làm đồ án

- [ ] **TypeScript:** Khai báo constructor rút gọn, gán kiểu biến/hàm, sử dụng decorator.
- [ ] **Data Binding:** Thành thạo 4 kiểu binding: `{{}}`, `[]`, `()`, `[()]`.
- [ ] **Directives:** Nắm chắc `*ngIf`, `*ngFor` (kèm `trackBy`), `[ngSwitch]`, `[ngClass]`, `[ngStyle]`.
- [ ] **Components:** Tách nhỏ component, giao tiếp qua `@Input()` / `@Output() EventEmitter`, nắm rõ các Lifecycle Hooks (`ngOnInit`, `ngOnChanges`, `ngOnDestroy`).
- [ ] **Pipes:** Áp dụng `currency`, `date`, `number`, `uppercase`, `async`; viết được Custom Pipe.
- [ ] **Dependency Injection:** Tách biệt nghiệp vụ vào `@Injectable()` Services, đăng ký vào `providers`.
- [ ] **Forms:** Xây dựng Form kiểm định bằng `ReactiveFormsModule` (`FormGroup`, `FormControl`, `Validators`).
- [ ] **Routing:** Cấu hình đường dẫn URL, truyền nhận tham số qua `ActivatedRoute`, bảo vệ trang bằng `CanActivate`.
- [ ] **API:** Giao tiếp backend RESTful CRUD qua HTTP Service, xử lý luồng bất đồng bộ bằng `Observable` của RxJS.
