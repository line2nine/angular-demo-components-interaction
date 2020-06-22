import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Article';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  articleList: Article[] = [
    {
      title: 'Ngân hàng Mỹ ‘bơi’ trong núi tiền mặt',
      image: 'https://picsum.photos/536/354',
      content: 'Cơ quan Bảo hiểm Tiền gửi Liên bang Mỹ (FDIC) cho biết từ tháng 1, các nhà băng Mỹ có thêm kỷ lục 2.000 tỷ USD trong các tài khoản tiền gửi. '
    },
    {
      title: 'Cảnh sát Mỹ đứng yên khi người biểu tình phả khói vào mặt',
      image: 'https://picsum.photos/536/355',
      content: 'Hình ảnh một cảnh sát Mỹ bình tĩnh đứng yên dù bị người biểu tình bao vây, la hét và thổi khói vào mặt đang lan truyền trên mạng xã hội.'
    },
    {
      title: 'Giám đốc Trung tâm Y tế Phan Thiết bị cách chức',
      image: 'https://picsum.photos/536/356',
      content: 'Ông Nguyễn Trung Hà, Giám đốc Trung tâm Y tế Phan Thiết và Phó giám đốc Ngô Giang Vũ bị cách chức do liên quan vụ án tham ô. '
    },
    {
      title: '"Thiên thạch" kim loại nặng 2,8 kg đâm xuống mặt đất',
      image: 'https://picsum.photos/536/357',
      content: 'Vật thể chứa đá và kim loại giống thiên thạch tạo ra tiếng nổ vang xa 2 km khi rơi khiến người dân địa phương hoảng sợ.'
    },
  ];

  searchArticle = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchArticle = this.articleList;

    this.searchService.searchByKeyword.subscribe(keyword => {
      this.searchArticle = this.articleList.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    })
  }

}
