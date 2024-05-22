import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BhuiyanService } from '../bhuiyan.service';
import { Router } from '@angular/router';
import { MutationReg } from '../mutation-reg';
import { MutationGen } from '../mutation-gen';

@Component({
  selector: 'app-property-registration',
  templateUrl: './property-registration.component.html',
  styleUrls: ['./property-registration.component.css']
})
export class PropertyRegistrationComponent implements OnInit { //5
  propertyReg: MutationReg[] = []; //6
  BasraData: MutationReg[] = [];
  general: MutationGen[] = [];
  selectedItem: any = null;
  Basra: string = '';
  IdMaster: any = null;
  year: string;
  formData: any = {};
  allSelected: boolean = false;
  data: any[] = [];
  selectedIds: string = '';
  OwnerDetail: any = [];
  prashatavitBhuSwami: any = [];
  date: string = ''
  checkedItems: boolean[] = [];
  rootCheckboxValue: boolean = true;
  inputValue: number | undefined;
  MutationReasonId: any = 0;
  form!: FormGroup;
  form1!: FormGroup;
  Pregno: any = '';
  MutationReasonid: number | null = null;//MutationReasonid: number =0
  Totalarea: any = 0;
  parea: any = 0;
  Khasrano: string = '';
  iD_MasterKey_FK_Deprecated: any = 0;

  //visibility
  isBasraAdditionalvisible: boolean = false;
  isChayanitBhuSwamivisible: boolean = false;
  isNayeBhumiswamiMenu: boolean = true;//ye menu true rhega 
  isNayeBhumiswaminijiFormvisible: boolean = false
  isMaujudaBhumiswamiisvisible: boolean = false;
  isNabaligformvisible: boolean = false;
  isKhasraButtonisvisible: boolean = true;
  //7
  constructor(public regBhuiyaSer: BhuiyanService, private router: Router, private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const nextYearShort = nextYear.toString().substring(2);
    this.year = `${currentYear}-${nextYearShort}`;
  }

  ngOnInit(): void {
    this.getKhasraMaster();
    this.form = new FormGroup({
      OwnerName: new FormControl('', [Validators.required]),
      HFFlag: new FormControl('', [Validators.required]),
      OwnerFather: new FormControl('', [Validators.required]),
      Gender: new FormControl('', [Validators.required]),
      Category: new FormControl('', [Validators.required]),
      Caste: new FormControl('', [Validators.required]),
      AddNabaligData: new FormControl(false),
      GuardianHFFlag_Kreta: new FormControl(''),
      GuardianName_Kreta: new FormControl(''),
      GuardianHFName_Kreta: new FormControl('')
    })
    this.form1 = this.fb.group({
      ID_MasterKey_FK_Deprecated: new FormControl(this.iD_MasterKey_FK_Deprecated, Validators.required),
      PregNo: new FormControl(this.Pregno, Validators.required),
      Parea: new FormControl(parseFloat(this.parea), Validators.required),
      MutationReasonId: new FormControl(this.MutationReasonid, Validators.required),
      TotalArea: new FormControl(parseFloat(this.Totalarea), Validators.required),
      KhasraNo: new FormControl(this.Khasrano, Validators.required),
    });
  }
  get f() {
    return this.form.controls;
  }
  get f1() {
    return this.form1.controls;
  }
  FinalSubmission() {
    console.log('Done ')
    let errorMsg2 = '';
    if (this.Pregno === '') {
      errorMsg2 = 'Year';
    }
    else if (this.MutationReasonid === null && this.MutationReasonid === 0) {
      errorMsg2 = 'mutationReasonId';
    }
    else if (this.Khasrano != this.general[0].KhasraNo) {
      errorMsg2 = 'Something went wrong with Khasrano';
    }
    else if (this.Totalarea != this.general[0].Area) {
      errorMsg2 = 'Something went wrong with area';
    }
    else if (this.parea > this.general[0].Area || this.parea <= 0) {
      errorMsg2 = 'Something went wrong with Parea';
    } else {
      errorMsg2 = 'Good'
      console.log(this.form1.value)
      if (this.form1.valid) {
        this.regBhuiyaSer.insertProperty_RegistrationDetail_Main(this.form1.value).subscribe((data: any) => {
          alert('Data Successfully stored.')
        })
      }


    }
    alert(errorMsg2)
  }
  submit() {
    console.log(this.form.value)
    if (this.form.valid) {
      // this.regBhuiyaSer.insertPropOtherOFfline(this.form.value).subscribe((data: any) => {
      //   console.log('Data saved successfully.')
      //   this.form.reset();
      // })
      alert('Data Saved Successfully.')
    }
    else {
      console.log('Form is invalid');
      let errorMsg = '';
      if (this.form.get('OwnerName')?.hasError('required') || this.form.value.OwnerName == '') {
        errorMsg = 'OwnerName is required.'
      }
      else if (this.form.get('HFFlag')?.hasError('required') || this.form.value.HFFlag == '') {
        errorMsg = 'HFFlag is required.'
      }
      else if (this.form.get('OwnerFather')?.hasError('required') || this.form.value.OwnerFather == '') {
        errorMsg = 'OwnerFather is required.'
      }
      else if (this.form.get('Gender')?.hasError('required') || this.form.value.Gender == '') {
        errorMsg = 'Gender is required.'
      }
      else if (this.form.get('Category')?.hasError('required') || this.form.value.Category == '') {
        errorMsg = 'Category is required.'
      }
      else if (this.form.get('Caste')?.hasError('required') || this.form.value.Caste == '') {
        errorMsg = 'Caste is required.'
      }

      alert(errorMsg);
    }
  }
  nayeBhuswamiType(event: any) {
    if (event === 'निजी') {
      this.isNayeBhumiswaminijiFormvisible = true;
    }
    else {
      this.isNayeBhumiswaminijiFormvisible = false;
    }
  }
  MaujudaBhuSwami() {
    this.isMaujudaBhumiswamiisvisible = true;
    this.isNayeBhumiswamiMenu = false
  }
  nayeBhuswamiJankari() {
    this.isNayeBhumiswamiMenu = true;
  }
  onCheckboxChange(event: any, index: number) {
    this.checkedItems[index] = event.target.checked;
    this.allSelected = this.checkedItems.every(item => item);
    // this.updateSelectedIds();
  }
  MutationReason(mr: any) {
    if (mr == '8') {
      this.isKhasraButtonisvisible = false;
    }

  }
  selectAll(event: any) {
    this.allSelected = event.target.checked;
    this.checkedItems = this.general.map(() => this.allSelected);
    // this.updateSelectedIds();
  }

  updateSelectedIds() {
    this.selectedIds = this.general.reduce((acc: string[], item, index) => {
      if (this.checkedItems[index]) {
        acc.push(item.KhasraNo);
      }
      return acc;
    }, []).join(', ');
  }


  isChecked(index: number) {
    return this.checkedItems[index];
  }

  showSelectedIds() {
    this.updateSelectedIds();
    // alert(this.selectedIds);
  }
  removeRow(index: number) {
    //   this.regBhuiyan.splice(index, 1); // Remove the row from the regBhuiyan array
  }
  //8

  getKhasraMaster() {
    this.regBhuiyaSer.getAllKhasraMaster().subscribe((data: any[]) => {
      this.propertyReg = data;
      //Khasra master
    })
  }
  nabaligData(event: any) {
    const addNabaligDataControl = this.form.get('AddNabaligData');
    const guardianHFFlag_Kreta = this.form.get('GuardianHFFlag_Kreta');
    const guardianName_Kreta = this.form.get('GuardianName_Kreta');
    const guardianHFName_Kreta = this.form.get('GuardianHFName_Kreta')

    addNabaligDataControl?.valueChanges.subscribe((checked: boolean) => {
      if (checked) {
        guardianHFFlag_Kreta?.setValidators([Validators.required]);
        guardianName_Kreta?.setValidators([Validators.required]);
        guardianHFName_Kreta?.setValidators([Validators.required]);
      }
      else {
        guardianHFFlag_Kreta?.clearValidators();
        guardianName_Kreta?.clearValidators();
        guardianHFName_Kreta?.clearValidators();
        guardianHFFlag_Kreta?.setValue(null);
        guardianName_Kreta?.setValue(null);
        guardianHFName_Kreta?.setValue(null);
      }
      guardianHFFlag_Kreta?.updateValueAndValidity();
      guardianName_Kreta?.updateValueAndValidity();
      guardianHFName_Kreta?.updateValueAndValidity();

    })

    //myyyyyyyyy
    // if (event.target.checked == true) {
    //   this.isNabaligformvisible = true
    // }
    // else {
    //   this.isNabaligformvisible = false;
    // }
  }
  getOwnerDetail() {
    console.log("getOwnerDetail " + this.selectedItem.ID_MasterKey)
    this.regBhuiyaSer.getOwnerDetailByIdMaster(this.selectedItem.ID_MasterKey).subscribe((data: any) => {
      this.OwnerDetail = data;
      //Vartaman bhuSwami
    })
    this.isChayanitBhuSwamivisible = true
  }
  ByBasra() {
    this.isBasraAdditionalvisible = true;
    this.Basra = this.selectedItem.BasraNo;
    this.IdMaster = this.selectedItem.ID_MasterKey
    console.log('Hello  ' + this.Basra + "  " + this.IdMaster + "  " + this.selectedItem.KhasraNo)
    // this.Basra = encodeURIComponent(this.Basra) //for 35/2=35%f2
    this.regBhuiyaSer.getByIdMasterGeneral(this.selectedItem.ID_MasterKey).subscribe((data: any[]) => {
      this.general = data;
      console.log(this.general)
      this.iD_MasterKey_FK_Deprecated = this.IdMaster;
      console.log(this.iD_MasterKey_FK_Deprecated)
      this.Khasrano = this.general[0].KhasraNo;
      this.parea = this.general[0].Area.toFixed(4);
      this.Totalarea = this.general[0].Area.toFixed(4);
    })


  }


  listSelector: string = 'list1'; // Default selection
  selectedValue: number | undefined; //string

  list1: any[] = [
    { text: 'विक्रय', value: 1 },
    { text: 'दान', value: 2 },
    { text: ' सह खातेदार हटाना /रजिस्टर हक्त्याग', value: 3 },
    { text: 'खाता विभाजन (बटवारा)', value: 4 },
    { text: 'वासीयंतनामा', value: 5 },
    { text: 'तबादलानामा', value: 6 },
    { text: 'भूमि आबंटन', value: 7 },
  ];

  list2: any[] = [
    { text: 'उत्तराधिकार', value: 8 },
    { text: 'सह खातेदार हटाना /रजिस्टर हक्त्याग', value: 9 },
    { text: 'खाता विभाजन (बटवारा)', value: 10 },
    { text: 'वासीयंतनामा', value: 11 },
    { text: 'तबादलानामा', value: 12 },
    { text: 'बालिग होना', value: 13 },
    { text: 'भूमि व्यपवर्तन', value: 14 },
    { text: 'भूमि आबंटन', value: 15 },
    { text: 'भू-अर्जन', value: 16 },
    { text: 'बंदोबस्त त्रुटि सुधार', value: 17 },
    { text: 'वरिष्ठ न्यायलय द्वारा निम्न न्यायलय के आदेश में परिवर्तन', value: 18 },
    { text: 'सह खातेदार जोड़े', value: 19 },
    { text: 'ग्राम नौकर नियुक्ति', value: 20 },
    { text: 'विक्रय', value: 21 },
    { text: 'विक्रय', value: 22 },
  ];

}
