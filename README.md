### 安装依赖
  >> meteor npm i

### 运行
  >> meteor run start

### 安装 meteor 包
  >> meteor add <包名>

### 安装 npm 包
  >> meteor npm i --save-dev <包名>

### 默认文件加载顺序
  1. 始终在其他所有内容之前加载HTML模板文件
  2. 然后main.开头的文件加载
  3. 接下来加载任何 lib/ 目录中的文件
  4. 接下来加载具有更深路径的文件
  5. 然后按整个路径的字母顺序加载文件

  #### 例：  
    >> nav.html  
    >> main.html  
    >> client/lib/methods.js  
    >> client/lib/styles.js  
    >> lib/feature/styles.js  
    >> lib/collections.js  
    >> client/feature-y.js  
    >> feature-x.js  
    >> client/main.js  

### 目录结构
  #### 特殊目录  
    imports/                    # 用于延迟加载功能，必须使用 import 导入文件。  
    client/                     # 客户应用代码，参与打包的前端代码文件夹。  
    server/                     # 服务端代码，参与打包的后端代码文件夹。  
    client/compatibility/       # 传统的第三方JavaScript库，不参与打包的前端兼容库目录。  
    lib/                        # 客户端/服务器的任何常用代码。  
    private/                    # 只能服务器访问的静态文件。  
    public/                     # 客户端可用的静态文件，不参与打包的前端资源文件夹。  
    tests/                      # 单元测试文件（不会加载到客户端或服务器上）。  

    以下目录也未作为应用代码的一部分加载：  
      名称以点开头的文件/目录，例如.meteor和.git  
      packages/                 # 本地包。  
      cordova-build-override/   # 用于高级移动构建自定义。  
      programs/                 # 由于遗留原因。  

  >> 以上目录之外的所有JavaScript文件都在客户端和服务器上加载。  
  >> 以上目录外的CSS和HTML文件仅在客户端上加载，不能从服务器代码中使用。  

  #### imports 目录结构  
    imports/api                  # 同构方法。  
    imports/lib                  # 客户端/服务器的任何常用代码。  
    imports/client               # 客户应用代码。  
    imports/server               # 服务器代码。  

  #### packages 目录结构  
    packages/                    # 适合所有氛围的。  
    packages/foo/client          # 客户应用代码。  
    packages/foo/lib             # 客户端/服务器的任何常用代码。  
    packages/foo/server          # 服务端代码。  
    packages/foo/tests           # 单元测试。  