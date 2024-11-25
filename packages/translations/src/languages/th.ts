import type { DefaultTranslationsObject, Language } from '../types.js'

export const thTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'บัญชี',
    accountOfCurrentUser: 'บัญชีปัจจุบัน',
    accountVerified: 'ยืนยันบัญชีสำเร็จแล้ว',
    alreadyActivated: 'เปิดใช้งานแล้ว',
    alreadyLoggedIn: 'ลงชื่อเข้าใช้แล้ว',
    apiKey: 'API Key',
    authenticated: 'ได้รับการตรวจสอบแล้ว',
    backToLogin: 'กลับไปหน้าเข้าสู่ระบบ',
    beginCreateFirstUser: 'สร้างผู้ใช้แรกเพื่อเริ่มใช้งาน',
    changePassword: 'เปลี่ยนรหัสผ่าน',
    checkYourEmailForPasswordReset:
      'ระบบได้ส่งอีเมลสำหรับรีเซ็ตรหัสผ่านไปที่อีเมลของคุณแล้ว โปรดเช็กอีเมลของคุณ',
    confirmGeneration: 'ยืนยันการสร้าง',
    confirmPassword: 'ยืนยันรหัสผ่าน',
    createFirstUser: 'สร้างผู้ใช้แรก',
    emailNotValid: 'อีเมลไม่ถูกต้อง',
    emailOrUsername: 'อีเมลหรือชื่อผู้ใช้',
    emailSent: 'ส่งอีเมลเรียบร้อยแล้ว',
    emailVerified: 'อีเมลได้รับการยืนยันเรียบร้อยแล้ว',
    enableAPIKey: 'เปิดใช้ API Key',
    failedToUnlock: 'ไม่สามารถปลดล็อกได้',
    forceUnlock: 'ปลดล็อกบัญชี',
    forgotPassword: 'ลืมรหัสผ่าน',
    forgotPasswordEmailInstructions:
      'กรุณาใส่อีเมลของคุณ ระบบจะส่งวิธีการเปลี่ยนรหัสผ่านไปให้คุณทางอีเมล',
    forgotPasswordQuestion: 'ลืมรหัสผ่าน?',
    forgotPasswordUsernameInstructions:
      'กรุณากรอกชื่อผู้ใช้ของคุณที่ด้านล่าง คำแนะนำเกี่ยวกับวิธีการรีเซ็ตรหัสผ่านของคุณจะถูกส่งไปยังที่อยู่อีเมลที่เชื่อมโยงกับชื่อผู้ใช้ของคุณ',
    generate: 'สร้าง',
    generateNewAPIKey: 'สร้าง API Key',
    generatingNewAPIKeyWillInvalidate:
      'การสร้าง API Key ใหม่จะเป็นการ<1>ยกเลิก</1> API Key เดิม คุณต้องการดำเนินการต่อหรือไม่?',
    lockUntil: 'ล็อกบัญชีถึง',
    logBackIn: 'เข้าสู่ระบบอีกครั้ง',
    loggedIn: 'หากต้องการเข้าสู่ระบบด้วยบัญชีอื่น กรุณา<0>ออกจากระบบ</0>ก่อน',
    loggedInChangePassword: 'หากต้องการเปลี่ยนรหัสผ่าน กรุณาแก้ไขที่หน้า<0>บัญชี</0>ของคุณ',
    loggedOutInactivity: 'คุณได้ออกจากระบบเนื่องจากไม่มีการใช้งาน',
    loggedOutSuccessfully: 'ออกจากระบบเรียบร้อยแล้ว',
    loggingOut: 'ออกจากระบบ...',
    login: 'เข้าสู่ระบบ',
    loginAttempts: 'จำนวนครั้งการเข้าสู่ระบบ',
    loginUser: 'เข้าสู่ระบบ',
    loginWithAnotherUser: 'หากต้องการเข้าสู่ระบบด้วยบัญชีอื่น กรุณา<0>ออกจากระบบ</0>ก่อน',
    logOut: 'ออกจากระบบ',
    logout: 'ออกจากระบบ',
    logoutSuccessful: 'ออกจากระบบสำเร็จ',
    logoutUser: 'ออกจากระบบ',
    newAccountCreated:
      'ระบบได้สร้างบัญชีผู้ใช้ให้คุณสำหรับเข้าใช้งาน <a href="{{serverURL}}">{{serverURL}}</a> เรียบร้อยแล้ว กรุณากดลิงก์ด้านล่างเพื่อยืนยันอีเมล หลังจากยืนยันอีเมลเสร็จสิ้น คุณจะสามารถเข้าใช้งานระบบได้',
    newAPIKeyGenerated: 'สร้าง API Key ใหม่แล้ว',
    newPassword: 'รหัสผ่านใหม่',
    passed: 'การยืนยันตัวตนสำเร็จ',
    passwordResetSuccessfully: 'รีเซ็ตรหัสผ่านเรียบร้อยแล้ว',
    resetPassword: 'รีเซ็ตรหัสผ่าน',
    resetPasswordExpiration: 'วันหมดอายุสำหรับการรีเซ็ตรหัสผ่าน',
    resetPasswordToken: 'Token รีเซ็ตรหัสผ่าน',
    resetYourPassword: 'รีเซ็ตรหัสผ่านของคุณ',
    stayLoggedIn: 'เข้าสู่ระบบต่อไป',
    successfullyRegisteredFirstUser: 'ลงทะเบียนผู้ใช้คนแรกสำเร็จแล้ว',
    successfullyUnlocked: 'ปลดล็อกบัญชีสำเร็จ',
    tokenRefreshSuccessful: 'การรีเฟรชโทเค็นสำเร็จ',
    unableToVerify: 'ไม่สามารถยืนยันบัญชีได้',
    username: 'ชื่อผู้ใช้',
    usernameNotValid: 'ชื่อผู้ใช้ที่ให้มาไม่ถูกต้อง',
    verified: 'ยืนยันบััญชีแล้ว',
    verifiedSuccessfully: 'ยืนยันบัญชีสำเร็จ',
    verify: 'ยืนยันบัญชี',
    verifyUser: 'ยืนยันบัญชี',
    verifyYourEmail: 'ยืนยันอีเมลของคุณ',
    youAreInactive:
      'คุณกำลังจะถูกให้ออกจากระบบในเร็ว ๆ นี้เนื่องจากไม่มีการใช้งานระบบมาสักพักหนึ่ง คุณต้องการเข้าสู่ระบบต่อหรือไม่?',
    youAreReceivingResetPassword:
      'คุณได้รับอีเมลนี้เนื่องจากคุณ (หรือคนอื่น) ได้ร้องขอให้รีเซ็ตรหัสผ่านของบัญชีของคุณ กรุณากดลิงก์ด้านล่างเพื่อดำเนินการรีเซ็ตรหัสผ่านต่อ:',
    youDidNotRequestPassword:
      'หากคุณไม่ได้ร้องขอให้มีการรีเซ็ตรหัสผ่าน คุณสามารถเพิกเฉยข้อความนี้ได้ โดยรหัสผ่านของคุณจะคงอยู่เช่นเดิม',
  },
  error: {
    accountAlreadyActivated: 'บัญชีนี้ถูกเปิดใช้งานไปแล้ว',
    autosaving: 'เกิดปัญหาระหว่างการบันทึกเอกสารอัตโนมัติ',
    correctInvalidFields: 'โปรดแก้ไขช่องที่ไม่ถูกต้อง',
    deletingFile: 'เกิดปัญหาระหว่างการลบไฟล์',
    deletingTitle: 'เกิดปัญหาระหว่างการลบ {{title}} โปรดตรวจสอบการเชื่อมต่อของคุณแล้วลองอีกครั้ง',
    emailOrPasswordIncorrect: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
    followingFieldsInvalid_one: 'ช่องต่อไปนี้ไม่ถูกต้อง:',
    followingFieldsInvalid_other: 'ช่องต่อไปนี้ไม่ถูกต้อง:',
    incorrectCollection: 'Collection ไม่ถูกต้อง',
    invalidFileType: 'ประเภทของไฟล์ไม่ถูกต้อง',
    invalidFileTypeValue: 'ประเภทของไฟล์ไม่ถูกต้อง: {{value}}',
    loadingDocument: 'เกิดปัญหาระหว่างการโหลดเอกสารที่มี ID {{id}}',
    localesNotSaved_one: 'ไม่สามารถบันทึกกำหนดสถานที่ต่อไปนี้ได้:',
    localesNotSaved_other: 'ไม่สามารถบันทึกกำหนดสถานที่ต่อไปนี้ได้:',
    logoutFailed: 'การออกจากระบบล้มเหลว.',
    missingEmail: 'ไม่พบอีเมล',
    missingIDOfDocument: 'ไม่พบ ID ของเอกสารที่ต้องการแก้ไข',
    missingIDOfVersion: 'ไม่พบ ID ของเวอร์ชัน',
    missingRequiredData: 'ไม่พบข้อมูลที่จำเป็น',
    noFilesUploaded: 'ไม่มีไฟล์ถูกอัปโหลด',
    noMatchedField: 'ไม่พบช่อง "{{label}}"',
    notAllowedToAccessPage: 'คุณไม่ได้รับอนุญาตให้เข้าถึงหน้านี้',
    notAllowedToPerformAction: 'คุณไม่ได้รับอนุญาตให้ดำเนินการสิ่งนี้',
    notFound: 'ไม่พบหน้าที่คุณต้องการ',
    noUser: 'ไม่พบผู้ใช้',
    previewing: 'เกิดปัญหาระหว่างการแสดงตัวอย่างเอกสาร',
    problemUploadingFile: 'เกิดปัญหาระหว่างการอัปโหลดไฟล์',
    tokenInvalidOrExpired: 'Token ไม่ถูกต้องหรือหมดอายุ',
    tokenNotProvided: 'ไม่ได้รับโทเค็น',
    unableToDeleteCount: 'ไม่สามารถลบ {{count}} จาก {{total}} {{label}}',
    unableToUpdateCount: 'ไม่สามารถอัปเดต {{count}} จาก {{total}} {{label}}',
    unauthorized: 'คุณไม่ได้รับอนุญาต กรุณาเข้าสู่ระบบเพื่อทำคำขอนี้',
    unknown: 'เกิดปัญหาบางอย่างที่ไม่ทราบสาเหตุ',
    unPublishingDocument: 'เกิดปัญหาระหว่างการยกเลิกการเผยแพร่เอกสารนี้',
    unspecific: 'เกิดปัญหาบางอย่าง',
    userEmailAlreadyRegistered: 'ผู้ใช้ที่มีอีเมลดังกล่าวได้ลงทะเบียนแล้ว',
    userLocked: 'บัญชีนี้ถูกล็อกเนื่องจากมีการพยายามเข้าสู่ระบบมากเกินไป',
    usernameAlreadyRegistered: 'ผู้ใช้ที่มีชื่อผู้ใช้ที่ระบุไว้แล้วถูกลงทะเบียนเอาไว้แล้ว',
    usernameOrPasswordIncorrect: 'ชื่อผู้ใช้หรือรหัสผ่านที่คุณให้มาไม่ถูกต้อง',
    valueMustBeUnique: 'ค่าต้องไม่ซ้ำกับเอกสารอื่น',
    verificationTokenInvalid: 'Token ยืนยันตัวตนไม่ถูกต้อง',
  },
  fields: {
    addLabel: 'เพิ่ม {{label}}',
    addLink: 'เพิ่มลิงค์',
    addNew: 'เพิ่ม',
    addNewLabel: 'เพิ่ม {{label}} ใหม่',
    addRelationship: 'เพิ่มความสัมพันธ์',
    addUpload: 'เพิ่มการอัปโหลด',
    block: 'Block',
    blocks: 'Blocks',
    blockType: 'ประเภท Block',
    chooseBetweenCustomTextOrDocument: 'เลือกระหว่างกำหนด URL เองหรือเชื่อมไปยังเอกสารอื่น',
    chooseDocumentToLink: 'เลือกเอกสารที่จะเชื่อมโยง',
    chooseFromExisting: 'เลือกจากที่มีอยู่',
    chooseLabel: 'เลือก {{label}}',
    collapseAll: 'ยุบทั้งหมด',
    customURL: 'URL ที่กำหนดเอง',
    editLabelData: 'แก้ไขข้อมูล {{label}}',
    editLink: 'แก้ไขลิงก์',
    editRelationship: 'แก้ไขความสัมพันธ์',
    enterURL: 'ระบุ URL',
    internalLink: 'ลิงก์ภายใน',
    itemsAndMore: '{{items}} และเพิ่มเติมอีก {{count}}',
    labelRelationship: 'ความสัมพันธ์กับ {{label}}',
    latitude: 'ละติจูด',
    linkedTo: 'เชื่อมกับ <0>{{label}}</0> สำเร็จ',
    linkType: 'ประเภทของลิงก์',
    longitude: 'ลองติจูด',
    newLabel: '{{label}} ใหม่',
    openInNewTab: 'เปิดในแท็บใหม่',
    passwordsDoNotMatch: 'รหัสผ่านไม่ตรงกัน',
    relatedDocument: 'เอกสารที่เกี่ยวข้อง',
    relationTo: 'เชื่อมกับ',
    removeRelationship: 'ลบความสัมพันธ์',
    removeUpload: 'ลบอัปโหลด',
    saveChanges: 'บันทึก',
    searchForBlock: 'ค้นหา Block',
    selectExistingLabel: 'เลือก {{label}} ที่มีอยู่',
    selectFieldsToEdit: 'เลือกช่องที่จะแก้ไข',
    showAll: 'แสดงทั้งหมด',
    swapRelationship: 'สลับความสัมพันธ์',
    swapUpload: 'สลับอัปโหลด',
    textToDisplay: 'ข้อความสำหรับแสดงผล',
    toggleBlock: 'เปิด/ปิด Block',
    uploadNewLabel: 'อัปโหลด {{label}} ใหม่',
  },
  general: {
    aboutToDelete: 'คุณกำลังจะลบ {{label}} <1>{{title}}</1> ต้องการดำเนินการต่อหรือไม่?',
    aboutToDeleteCount_many: 'คุณกำลังจะลบ {{count}} {{label}}',
    aboutToDeleteCount_one: 'คุณกำลังจะลบ {{count}} {{label}}',
    aboutToDeleteCount_other: 'คุณกำลังจะลบ {{count}} {{label}}',
    addBelow: 'เพิ่มด้านล่าง',
    addFilter: 'เพิ่มการกรอง',
    adminTheme: 'ธีมผู้ดูแลระบบ',
    and: 'และ',
    anotherUser: 'ผู้ใช้อื่น',
    anotherUserTakenOver: 'ผู้ใช้อื่นเข้าครอบครองการแก้ไขเอกสารนี้แล้ว',
    applyChanges: 'ใช้การเปลี่ยนแปลง',
    ascending: 'น้อยไปมาก',
    automatic: 'อัตโนมัติ',
    backToDashboard: 'กลับไปหน้าแดชบอร์ด',
    cancel: 'ยกเลิก',
    changesNotSaved: 'การเปลี่ยนแปลงยังไม่ได้ถูกบันทึก ถ้าคุณออกตอนนี้ สิ่งที่แก้ไขไว้จะหายไป',
    clearAll: 'ล้างทั้งหมด',
    close: 'ปิด',
    collapse: 'ยุบ',
    collections: 'Collections',
    columns: 'คอลัมน์',
    columnToSort: 'คอลัมน์ที่ต้องการเรียง',
    confirm: 'ยืนยัน',
    confirmDeletion: 'ยืนยันการลบ',
    confirmDuplication: 'ยืนยันการสำเนา',
    copied: 'คัดลอกแล้ว',
    copy: 'คัดลอก',
    create: 'สร้าง',
    created: 'ถูกสร้างเมื่อ',
    createdAt: 'สร้างเมื่อ',
    createNew: 'สร้างใหม่',
    createNewLabel: 'สร้าง {{label}} ใหม่',
    creating: 'กำลังสร้าง',
    creatingNewLabel: 'กำลังสร้าง {{label}} ใหม่',
    currentlyEditing:
      'กำลังแก้ไขเอกสารนี้อยู่ในขณะนี้ หากคุณเข้าครอบครอง พวกเขาจะถูกบล็อกจากการแก้ไขต่อไป และอาจสูญเสียการเปลี่ยนแปลงที่ไม่ได้บันทึก',
    custom: 'ที่ทำขึ้นเฉพาะ',
    dark: 'มืด',
    dashboard: 'แดชบอร์ด',
    delete: 'ลบ',
    deletedCountSuccessfully: 'Deleted {{count}} {{label}} successfully.',
    deletedSuccessfully: 'ลบสำเร็จ',
    deleting: 'กำลังลบ...',
    depth: 'ความลึก',
    descending: 'มากไปน้อย',
    deselectAllRows: 'ยกเลิกการเลือกทุกแถว',
    document: 'เอกสาร',
    documentLocked: 'เอกสารถูกล็อค',
    documents: 'เอกสาร',
    duplicate: 'สำเนา',
    duplicateWithoutSaving: 'สำเนาโดยไม่บันทึกการแก้ไข',
    edit: 'แก้ไข',
    editedSince: 'แก้ไขตั้งแต่',
    editing: 'แก้ไข',
    editingLabel_many: 'กำลังแก้ไข {{count}} {{label}}',
    editingLabel_one: 'กำลังแก้ไข {{count}} {{label}}',
    editingLabel_other: 'กำลังแก้ไข {{count}} {{label}}',
    editingTakenOver: 'การแก้ไขถูกครอบครอง',
    editLabel: 'แก้ไข {{label}}',
    email: 'อีเมล',
    emailAddress: 'อีเมล',
    enterAValue: 'ระบุค่า',
    error: 'ข้อผิดพลาด',
    errors: 'ข้อผิดพลาด',
    fallbackToDefaultLocale: 'สำรองไปยังตำแหน่งที่ตั้งเริ่มต้น',
    false: 'เท็จ',
    filter: 'กรอง',
    filters: 'กรอง',
    filterWhere: 'กรอง {{label}} เฉพาะ',
    globals: 'Globals',
    goBack: 'กลับไป',
    isEditing: 'กำลังแก้ไข',
    language: 'ภาษา',
    lastModified: 'แก้ไขล่าสุดเมื่อ',
    leaveAnyway: 'ออกจากหน้านี้',
    leaveWithoutSaving: 'ออกโดยไม่บันทึก',
    light: 'สว่าง',
    livePreview: 'แสดงตัวอย่าง',
    loading: 'กำลังโหลด',
    locale: 'ตำแหน่งที่ตั้ง',
    locales: 'ภาษา',
    menu: 'เมนู',
    moveDown: 'ขยับขึ้น',
    moveUp: 'ขยับลง',
    newPassword: 'รหัสผ่านใหม่',
    next: 'ถัดไป',
    noFiltersSet: 'ไม่มีการกรอง',
    noLabel: '<ไม่มี {{label}}>',
    none: 'ไม่มี',
    noOptions: 'ไม่มีตัวเลือก',
    noResults:
      'ไม่พบ {{label}} เนื่องจากยังไม่มี {{label}} หรือไม่มี {{label}} ใดตรงกับการกรองด้านบน',
    notFound: 'ไม่พบ',
    nothingFound: 'ไม่พบสิ่งใด',
    noValue: 'ไม่มีค่า',
    of: 'จาก',
    only: 'เท่านั้น',
    open: 'เปิด',
    or: 'หรือ',
    order: 'เรียงตาม',
    pageNotFound: 'ไม่พบหน้าที่ต้องการ',
    password: 'รหัสผ่าน',
    payloadSettings: 'การตั้งค่า Payload',
    perPage: 'จำนวนต่อหน้า: {{limit}}',
    previous: 'ก่อนหน้านี้',
    remove: 'ลบ',
    reset: 'รีเซ็ต',
    row: 'แถว',
    rows: 'แถว',
    save: 'บันทึก',
    saving: 'กำลังบันทึก...',
    searchBy: 'ค้นหาด้วย {{label}}',
    selectAll: 'เลือกทั้งหมด {{count}} {{label}}',
    selectAllRows: 'เลือกทุกแถว',
    selectedCount: 'เลือก {{count}} {{label}} แล้ว',
    selectValue: 'เลือกค่า',
    showAllLabel: 'แสดง {{label}} ทั้งหมด',
    sorryNotFound: 'ขออภัย ไม่สามารถทำตามคำขอของคุณได้',
    sort: 'เรียง',
    sortByLabelDirection: 'เรียงลำดับตาม {{label}} {{direction}}',
    stayOnThisPage: 'อยู่หน้านี้ต่อ',
    submissionSuccessful: 'ส่งสำเร็จ',
    submit: 'ส่ง',
    submitting: 'ส่ง...',
    success: 'ความสำเร็จ',
    successfullyCreated: 'สร้าง {{label}} สำเร็จ',
    successfullyDuplicated: 'สำเนา {{label}} สำเร็จ',
    takeOver: 'เข้ายึด',
    thisLanguage: 'ไทย',
    titleDeleted: 'ลบ {{label}} "{{title}}" สำเร็จ',
    true: 'จริง',
    unauthorized: 'ไม่ได้รับอนุญาต',
    unsavedChangesDuplicate: 'คุณมีการแก้ไขที่ยังไม่ถูกบันทึก คุณต้องการทำสำเนาต่อหรือไม่?',
    untitled: 'ไม่มีชื่อ',
    updatedAt: 'แก้ไขเมื่อ',
    updatedCountSuccessfully: 'อัปเดต {{count}} {{label}} เรียบร้อยแล้ว',
    updatedSuccessfully: 'แก้ไขสำเร็จ',
    updating: 'กำลังอัปเดต',
    uploading: 'กำลังอัปโหลด',
    uploadingBulk: 'อัปโหลด {{current}} จาก {{total}}',
    user: 'ผู้ใช้',
    username: 'ชื่อผู้ใช้',
    users: 'ผู้ใช้',
    value: 'ค่า',
    viewReadOnly: 'ดูในโหมดอ่านอย่างเดียว',
    welcome: 'ยินดีต้อนรับ',
  },
  operators: {
    contains: 'มี',
    equals: 'เท่ากับ',
    exists: 'มีอยู่',
    intersects: 'ตัดกัน',
    isGreaterThan: 'มากกว่า',
    isGreaterThanOrEqualTo: 'มากกว่าหรือเท่ากับ',
    isIn: 'อยู่ใน',
    isLessThan: 'น้อยกว่า',
    isLessThanOrEqualTo: 'น้อยกว่าหรือเท่ากับ',
    isLike: 'เหมือน',
    isNotEqualTo: 'ไม่เท่ากับ',
    isNotIn: 'ไม่ได้อยู่ใน',
    near: 'ใกล้',
    within: 'ภายใน',
  },
  upload: {
    addFile: 'เพิ่มไฟล์',
    addFiles: 'เพิ่มไฟล์',
    bulkUpload: 'อัปโหลดจำนวนมาก',
    crop: 'พืชผล',
    cropToolDescription: 'ลากมุมของพื้นที่ที่เลือก, วาดพื้นที่ใหม่หรือปรับค่าด้านล่าง',
    dragAndDrop: 'ลากและวางไฟล์',
    dragAndDropHere: 'หรือลากและวางไฟล์ที่นี่',
    editImage: 'แก้ไขรูปภาพ',
    fileName: 'ชื่อไฟล์',
    fileSize: 'ขนาดไฟล์',
    filesToUpload: 'อัปโหลดไฟล์',
    fileToUpload: 'อัปโหลดไฟล์',
    focalPoint: 'จุดสนใจ',
    focalPointDescription: 'ลากจุดโฟกัสตรงบนภาพตัวอย่างหรือปรับค่าที่อยู่ด้านล่าง',
    height: 'ความสูง',
    lessInfo: 'ซ่อนข้อมูล',
    moreInfo: 'แสดงข้อมูล',
    pasteURL: 'วาง URL',
    previewSizes: 'ขนาดตัวอย่าง',
    selectCollectionToBrowse: 'เลือก Collection ที่ต้องการค้นหา',
    selectFile: 'เลือกไฟล์',
    setCropArea: 'ตั้งค่าพื้นที่การครอบตัด',
    setFocalPoint: 'ตั้งจุดโฟกัส',
    sizes: 'ขนาด',
    sizesFor: 'ขนาดสำหรับ {{label}}',
    width: 'ความกว้าง',
  },
  validation: {
    emailAddress: 'กรุณาระบุอีเมลที่ถูกต้อง',
    enterNumber: 'กรุณาระบุตัวเลขที่ถูกต้อง',
    fieldHasNo: 'ช่องนี้ไม่มี {{label}}',
    greaterThanMax: '{{value}} มากกว่าค่าสูงสุดที่อนุญาตของ {{label}} ซึ่งคือ {{max}}.',
    invalidInput: 'ข้อมูลไม่ถูกต้อง',
    invalidSelection: 'ค่าที่เลือกไม่ถูกต้อง',
    invalidSelections: 'ค่าที่เลือกไม่ถูกต้องดังนี้:',
    lessThanMin: '{{value}} น้อยกว่าค่าต่ำสุดที่อนุญาตของ {{label}} ซึ่งคือ {{min}}.',
    limitReached: 'ถึงขีดจำกัดแล้ว, สามารถเพิ่มไอเทมได้เพียง {{max}} ไอเทมเท่านั้น',
    longerThanMin: 'ค่าต้องมีความยาวมากกว่า {{minLength}} ตัวอักษร',
    notValidDate: 'วันที่ "{{value}}" ไม่ถูกต้อง',
    required: 'จำเป็นต้องระบุค่า',
    requiresAtLeast: 'ต้องมีอย่างน้อย {{count}} {{label}}',
    requiresNoMoreThan: 'ห้ามมีเกิน {{count}} {{label}}',
    requiresTwoNumbers: 'ต้องมีตัวเลข 2 ค่า',
    shorterThanMax: 'ค่าต้องมีความยาวน้อยกว่า {{maxLength}} ตัวอักษร',
    trueOrFalse: 'เป็นได้แค่ "ใช่" หรือ "ไม่ใช่"',
    username: 'กรุณาใส่ชื่อผู้ใช้ที่ถูกต้อง สามารถมีตัวอักษร ตัวเลข ขีดกลาง จุด และขีดล่าง',
    validUploadID: 'ไม่ใช่ ID ของการอัปโหลดที่ถูกต้อง',
  },
  version: {
    type: 'ประเภท',
    aboutToPublishSelection: 'คุณกำลังจะเผยแพร่ {{label}} ทั้งหมดในส่วนที่เลือก คุณแน่ใจไหม?',
    aboutToRestore:
      'คุณกำลังจะคืนค่าเอกสาร {{label}} นี้กลับไปอยู่ในเวอร์ชันเมื่อวันที่ {{versionDate}}',
    aboutToRestoreGlobal:
      'คุณกำลังจะคืนค่า global {{label}} กลับไปอยู่ในเวอร์ชันเมื่อวันที่ {{versionDate}}.',
    aboutToRevertToPublished:
      'คุณกำลังจะย้อนการเปลี่ยนแปลงของเอกสารนี้ไปยังเวอร์ชันที่เผยแพร่อยู่ คุณต้องการดำเนินการต่อหรือไม่?',
    aboutToUnpublish: 'คุณกำลังจะยกเลิกเผยแพร่เอกสารนี้ คุณต้องการดำเนินการต่อหรือไม่?',
    aboutToUnpublishSelection: 'คุณกำลังจะเลิกเผยแพร่ {{label}} ทั้งหมดในส่วนที่เลือก คุณแน่ใจไหม?',
    autosave: 'บันทึกอัตโนมัติ',
    autosavedSuccessfully: 'บันทึกอัตโนมัติสำเร็จ',
    autosavedVersion: 'เวอร์ชันบันทึกอัตโนมัติ',
    changed: 'มีการแก้ไข',
    compareVersion: 'เปรียบเทียบเวอร์ชันกับ:',
    confirmPublish: 'ยืนยันการเผยแพร่',
    confirmRevertToSaved: 'ยืนยันย้อนการแก้ไข',
    confirmUnpublish: 'ยืนยันการยกเลิกการเผยแพร่',
    confirmVersionRestoration: 'ยืนยันการกู้คืนเวอร์ชัน',
    currentDocumentStatus: 'เอกสารปัจจุบัน',
    currentDraft: 'ร่างปัจจุบัน',
    currentPublishedVersion: 'เวอร์ชันที่เผยแพร่ในปัจจุบัน',
    draft: 'ฉบับร่าง',
    draftSavedSuccessfully: 'บันทึกร่างสำเร็จ',
    lastSavedAgo: 'บันทึกครั้งล่าสุด {{distance}} ที่ผ่านมา',
    noFurtherVersionsFound: 'ไม่พบเวอร์ชันอื่น ๆ',
    noRowsFound: 'ไม่พบ {{label}}',
    noRowsSelected: 'ไม่มี {{label}} ที่ถูกเลือก',
    preview: 'ตัวอย่าง',
    previouslyPublished: 'เผยแพร่ก่อนหน้านี้',
    problemRestoringVersion: 'เกิดปัญหาระหว่างการกู้คืนเวอร์ชันนี้',
    publish: 'เผยแพร่',
    publishChanges: 'เผยแพร่การแก้ไข',
    published: 'เผยแพร่แล้ว',
    publishIn: 'เผยแพร่ใน {{locale}}',
    publishing: 'การเผยแพร่',
    restoreAsDraft: 'เรียกคืนเป็นร่าง',
    restoredSuccessfully: 'กู้คืนเวอร์ชันสำเร็จ',
    restoreThisVersion: 'กู้คืนเวอร์ชันนี้',
    restoring: 'กำลังกู้คืน...',
    reverting: 'กำลังย้อน...',
    revertToPublished: 'ย้อนกลับไปเวอร์ชันที่เผยแพร่อยู่',
    saveDraft: 'บันทึกร่าง',
    selectLocales: 'เลือกภาษาที่ต้องการแสดง',
    selectVersionToCompare: 'เลือกเวอร์ชันที่ต้องการเปรียบเทียบ',
    showingVersionsFor: 'กำลังแสดงเวอร์ชันของ:',
    showLocales: 'แสดงภาษา:',
    status: 'สถานะ',
    unpublish: 'หยุดเผยแพร่',
    unpublishing: 'กำลังหยุดการเผยแพร่...',
    version: 'เวอร์ชัน',
    versionCount_many: 'พบ {{count}} เวอร์ชัน',
    versionCount_none: 'ไม่พบเวอร์ชันอื่น',
    versionCount_one: 'พบ {{count}} เวอร์ชัน',
    versionCount_other: 'พบ {{count}} เวอร์ชัน',
    versionCreatedOn: '{{version}} ถูกสร้างเมื่อ:',
    versionID: 'ID ของเวอร์ชัน',
    versions: 'เวอร์ชัน',
    viewingVersion: 'กำลังดูเวอร์ชันของ {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'กำลังดูเวอร์ชันของ global {{entityLabel}}',
    viewingVersions: 'กำลังดูเวอร์ชันของ {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'กำลังดูเวอร์ชันของ global {{entityLabel}}',
  },
}

export const th: Language = {
  dateFNSKey: 'th',
  translations: thTranslations,
}
