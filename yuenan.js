hostname = api.gyrosco.pe, origin-prod-phoenix.jibjab.com, api.termius.com, api.picsart.com, api.unfold.app, viva-asia1.vvbrd.com, graph.nhaccuatui.com, api.memrise.com , buy.itunes.apple.com, api.sync.me, pool.elsanow.io, lambda.us-east-1.amazonaws.com, api.mondlylanguages.com, api.busuu.com, owa.videoshowiosglobalserver.com:8095, accounts.elevateapp.net, purchases.ws.pho.to, api-intl.mr.meitu.com, bmall.camera360.com, api.tv.zing.vn, api.calm.com, www.calm.com, api.global.mp3.zing.vn, apimboom2.globaldelight.net, photos.adobe.io, 

# gyroscope
#^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Gyroscope.vip.js

# Termius 
#https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Terminus.js

# PicsArt
^https:\/\/api\.picsart\.com\/users\/show\/me\.json$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/picsArt.vip.js

#Vivavideo
^https:\/\/viva-asia1\.vvbrd\.com\/api\/rest\/u\/vip* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/vivavideo.vip.js

#Undfold
^https:\/\/api\.unfold\.app\/v1\/ios\/receipts$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Unfold.vip.js

#Nhaccuatui
^https:\/\/graph\.nhaccuatui\.com\/* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/nhaccuatui.js

#Memrise

^https:\/\/api\.memrise\.com\/v1\.16\/(me\/$|dashboard\/$|leaderboards\/following\/) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/memrise.vip.js

# Jibjab
#^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/jibjab.vip.js

#buyhack
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/buy.itunes.apple.com.js

#sync
^https:\/\/api\.sync\.me\/api\/purchases\/(report_purchases|get_purchases)  url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/syn.me.js

#elsaresponse
^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/elsa-response.js

#elsarewrite
^https:\/\/pool\.elsanow\.io\/content\/api\/v1\/modules\/download$  url request-header (\r\n)x-session-token:.+(\r\n) request-header $1x-session-token: F3S0w0bysBQFdbjtxpFurrFv2ItBBcBkVQxUddQW+9vjt2JXM751ksqq5GAWpkl+kk9nhig9BGh9JhYHQaokmendY6zLZDscHiRkZD2HrdJclKVCLordAARJhYIrf5C+5OSK6ax2TA45CKi8S09FEtYXN4noXO7gt42NT6WPIv6DKhdIwVxQuIAMLU5abmpMTDlyWeI4ulBWcOQbuZWWZg==

#drops
^https:\/\/lambda\.us-east-1\.amazonaws\.com\/2015-03-31\/functions\/prod-4-syncPurchases\/invocations$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/drops.js

#mondly
^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/mondly.vip.js

#busuu
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/busuu.vip.js

#Videoshow
^https:\/\/owa\.videoshowiosglobalserver\.com* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/videoshow.vip.js

#elevate
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/elevate.vip.js

#beautyplus
^https:\/\/api-intl\.mr\.meitu\.com\/v1\/subs_offer_elg$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/beautyplusvip.js

#camera360
^https:\/\/bmall\.camera360\.com\/api\/iap\/check-receipt$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/camera360.vip.js

#zingtv
^http:\/\/api\.tv\.zing\.vn\/3\.1\/user* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/zingtvvipv1.js

#calm
^https:\/\/api\.calm\.com\/me$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/calm.vip.js

#remove_manage
^https:\/\/www\.calm\.com\/mobile\/manage-subscription\?token=*  url reject-img

#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url response-body "status":.* response-body "status":"subscriber","current_subs":{"product_id":"lightroom","store":"adobe","purchase_date":"2019-10-10T16:32:10.254954Z","sao":{"inpkg_CCES":"0","inpkg_CCLE":"1","inpkg_CCSN":"0","inpkg_CCSV":"0","inpkg_LCCC":"0","inpkg_LPES":"0","inpkg_LRBRL":"0","inpkg_LRMAC":"0","inpkg_LRMC":"0","inpkg_LRMP":"0","inpkg_LRTB":"0","inpkg_PHLT":"0","inpkg_PHLT2":"0","inpkg_PLES":"0","storage_quota":"100"}},"storage":{"used":0,"limit":1154487209165,"display_limit":1099511627776,"warn":992137445376}},"avatar":{"placeholder":true}}
