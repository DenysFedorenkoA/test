const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.TiledBg,
		C3.Plugins.Dictionary,
		C3.Plugins.Arr,
		C3.Plugins.Json,
		C3.Plugins.Touch,
		C3.Plugins.AJAX,
		C3.Plugins.Audio,
		C3.Plugins.Timeline,
		C3.Plugins.Text,
		C3.Behaviors.Fade,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Flash,
		C3.Plugins.Browser,
		C3.Plugins.GameAnalytics,
		C3.Plugins.Date,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.Keyboard,
		C3.Plugins.LocalStorage,
		C3.Plugins.NinePatch,
		C3.Behaviors.Timer,
		C3.Plugins.Cryptography,
		C3.Plugins.BinaryData,
		C3.Plugins.TextBox,
		C3.Plugins.Particles,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Behaviors.MoveTo,
		C3.Behaviors.destroy,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Dictionary.Exps.AsJSON,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Json.Exps.Get,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.OnSignal,
		C3.Plugins.Text.Cnds.OnCreated,
		C3.Plugins.Text.Cnds.HasTags,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.Json.Cnds.ForEach,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Json.Acts.Parse,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerGet,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Dictionary.Exps.Get,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.PickByEvaluate,
		C3.Plugins.Sprite.Exps.UID,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Plugins.System.Cnds.PickLastCreated,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Behaviors.Timer.Cnds.IsTimerRunning,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.System.Exps.choose,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Behaviors.Tween.Acts.StopAllTweens,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Text.Cnds.PickByUID,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Behaviors.Tween.Acts.StopTweens,
		C3.Plugins.Dictionary.Acts.DeleteKey,
		C3.Plugins.Dictionary.Cnds.HasKey,
		C3.Plugins.Dictionary.Acts.SetKey,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.Eponesh_GameScore.Exps.PaymentsCurProductPrice,
		C3.Plugins.Eponesh_GameScore.Acts.PaymentsPurchase,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPaymentsPurchase,
		C3.Plugins.Eponesh_GameScore.Acts.PaymentsConsume,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPaymentsConsume,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Eponesh_GameScore.Cnds.PaymentsPickProduct,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Behaviors.MoveTo.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.GamePush_Channels.Exps.CurChannelMembersCount,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.Sprite.Cnds.PickChildren,
		C3.Plugins.TiledBg.Acts.MoveToTop,
		C3.Plugins.System.Exps.float,
		C3.Plugins.System.Exps.tokenat,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.TiledBg.Acts.SetBoolInstanceVar,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Timeline.Acts.SetInstance,
		C3.Plugins.Timeline.Acts.PlayTimeline,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Behaviors.MoveTo.Acts.Stop,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Cnds.HasTags,
		C3.Behaviors.Tween.Acts.PauseAllTweens,
		C3.Behaviors.Tween.Acts.PauseTweens,
		C3.Behaviors.Tween.Acts.ResumeAllTweens,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.GameAnalytics.Acts.addDesignEvent,
		C3.Plugins.TiledBg.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Cnds.While,
		C3.ScriptsInEvents.EsCoin_Event3_Act1,
		C3.Behaviors.Fade.Acts.RestartFade,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.NinePatch.Cnds.CompareInstanceVar,
		C3.Plugins.NinePatch.Cnds.PickChildren,
		C3.Plugins.NinePatch.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex255,
		C3.Behaviors.Timer.Exps.Duration,
		C3.Behaviors.Timer.Exps.CurrentTime,
		C3.Behaviors.Timer.Cnds.IsTimerPaused,
		C3.Behaviors.Timer.Acts.PauseResumeTimer,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.System.Exps.projectversion,
		C3.ScriptsInEvents.EsHome_Event5_Act2,
		C3.Plugins.Text.Acts.SetY,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerReset,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Dictionary.Acts.Clear,
		C3.Plugins.GamePush_Channels.Exps.CurChannelID,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Date.Cnds.CompareTimeStamps,
		C3.Plugins.Date.Exps.Now,
		C3.Plugins.Eponesh_GameScore.Cnds.SchedulersIsRegistered,
		C3.Plugins.Eponesh_GameScore.Acts.SchedulersRegister,
		C3.Plugins.Eponesh_GameScore.Cnds.SchedulersIsTodayRewardClaimed,
		C3.Plugins.Eponesh_GameScore.Acts.SchedulersClaimDay,
		C3.Plugins.Eponesh_GameScore.Cnds.OnSchedulersClaimDay,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSet,
		C3.Plugins.BinaryData.Acts.SetFromText,
		C3.Plugins.Cryptography.Acts.EncryptBinary,
		C3.ScriptsInEvents.EsHome_Event45_Act1,
		C3.Plugins.Eponesh_GameScore.Cnds.IsMobile,
		C3.Plugins.System.Acts.SetCanvasSize,
		C3.Plugins.System.Acts.Signal,
		C3.ScriptsInEvents.EsMain_Event6_Act1,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.Text.Cnds.IsBoolInstanceVarSet,
		C3.ScriptsInEvents.EsMain_Event16_Act1,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.NinePatch.Cnds.OnCreated,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.Json.Exps.CurrentKey,
		C3.Plugins.System.Exps.viewportheight,
		C3.Plugins.Json.Cnds.CompareValue,
		C3.Plugins.Json.Exps.Path,
		C3.Plugins.System.Exps.replace,
		C3.Plugins.Dictionary.Cnds.CompareValue,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.PickParent,
		C3.Plugins.System.Exps.viewportmidx,
		C3.Plugins.Eponesh_GameScore.Cnds.PaymentsIsPurchased,
		C3.Plugins.NinePatch.Cnds.HasTags,
		C3.Plugins.NinePatch.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPaymentsFetchProductsError,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPaymentsPurchaseError,
		C3.Plugins.System.Exps.timescale,
		C3.Plugins.Sprite.Exps.dt,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Touch.Exps.TouchIndex,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Touch.Exps.SpeedAt,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Behaviors.DragnDrop.Acts.Drop,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Behaviors.EightDir.Acts.SetVectorY,
		C3.Plugins.System.Exps.viewporttop,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.ScriptsInEvents.EsLoad_Event1_Act1,
		C3.ScriptsInEvents.EsLoad_Event1_Act2,
		C3.ScriptsInEvents.EsLoad_Event1_Act3,
		C3.ScriptsInEvents.EsLoad_Event1_Act4,
		C3.ScriptsInEvents.EsLoad_Event1_Act5,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerLoad,
		C3.Plugins.GameAnalytics.Acts.initialize,
		C3.ScriptsInEvents.EsLoad_Event3_Act1,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPlayerLoadComplete,
		C3.Plugins.Dictionary.Acts.JSONLoad,
		C3.Plugins.Eponesh_GameScore.Exps.VariablesGet,
		C3.Plugins.GamePush_Channels.Acts.CreateChannel,
		C3.Plugins.GamePush_Channels.Acts.FetchChannel,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerName,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSetName,
		C3.Plugins.GamePush_Channels.Acts.Join,
		C3.Plugins.Eponesh_GameScore.Acts.PaymentsFetchProducts,
		C3.Plugins.GamePush_Channels.Cnds.OnChannelsCreate,
		C3.Plugins.GamePush_Channels.Cnds.OnChannelsCreateError,
		C3.Plugins.GamePush_Channels.Cnds.OnChannelsAnyFetch,
		C3.Plugins.GamePush_Channels.Cnds.EachMember,
		C3.Plugins.Eponesh_GameScore.Cnds.OnPaymentsFetchProducts
	];
};
self.C3_JsPropNameTable = [
	{bullet_type: 0},
	{number_of_gun: 0},
	{is_gun_shoot: 0},
	{time_shoot: 0},
	{damage: 0},
	{damage1: 0},
	{damage2: 0},
	{bullet_type_shoot: 0},
	{bullet_type_shoot1: 0},
	{bullet_type_shoot2: 0},
	{speed_shoot: 0},
	{speed_shoot1: 0},
	{speed_shoot2: 0},
	{gun_order: 0},
	{gun_set_uid: 0},
	{is_drag_merge: 0},
	{is_template: 0},
	{is_can_shoot: 0},
	{monster_target: 0},
	{Number: 0},
	{GunType: 0},
	{marge: 0},
	{damageType: 0},
	{G_Gun1: 0},
	{G_Gun10: 0},
	{G_Gun11: 0},
	{G_Gun12: 0},
	{G_Gun13: 0},
	{G_Gun14: 0},
	{G_Gun15: 0},
	{G_Gun16: 0},
	{G_Gun17: 0},
	{G_Gun18: 0},
	{G_Gun19: 0},
	{G_Gun2: 0},
	{G_Gun20: 0},
	{G_Gun3: 0},
	{G_Gun4: 0},
	{G_Gun5: 0},
	{G_Gun6: 0},
	{G_Gun7: 0},
	{G_Gun8: 0},
	{G_Gun9: 0},
	{Gun_ButtonTrash: 0},
	{Gun_ButtonTrashTimeline: 0},
	{UpgradePos: 0},
	{Tween: 0},
	{Guns_ButtonBuy: 0},
	{G_Gun21: 0},
	{G_Gun22: 0},
	{mUID: 0},
	{mouth1: 0},
	{mouth10: 0},
	{mouth11: 0},
	{mouth12: 0},
	{mouth13: 0},
	{mouth14: 0},
	{mouth15: 0},
	{mouth16: 0},
	{mouth17: 0},
	{mouth18: 0},
	{mouth19: 0},
	{mouth2: 0},
	{mouth20: 0},
	{mouth3: 0},
	{mouth4: 0},
	{mouth5: 0},
	{mouth6: 0},
	{mouth7: 0},
	{mouth8: 0},
	{mouth9: 0},
	{health: 0},
	{health_full: 0},
	{step_bar: 0},
	{speed_attack: 0},
	{is_attack: 0},
	{count_attack: 0},
	{is_stop: 0},
	{coin_bonus: 0},
	{number: 0},
	{speedMove: 0},
	{G_Monster1: 0},
	{G_Monster10: 0},
	{G_Monster11: 0},
	{G_Monster12: 0},
	{G_Monster13: 0},
	{G_Monster14: 0},
	{G_Monster15: 0},
	{G_Monster16: 0},
	{G_Monster17: 0},
	{G_Monster18: 0},
	{G_Monster19: 0},
	{G_Monster2: 0},
	{G_Monster20: 0},
	{G_Monster3: 0},
	{G_Monster4: 0},
	{G_Monster5: 0},
	{G_Monster6: 0},
	{G_Monster7: 0},
	{G_Monster8: 0},
	{G_Monster9: 0},
	{Enemy_HpBGbar: 0},
	{Enemy_HpBar: 0},
	{Monster_ExplosionHit: 0},
	{Monster_HPBar: 0},
	{Monster_SpawnScope: 0},
	{Monsters_Explosion: 0},
	{monster_shoot: 0},
	{angle_bullet: 0},
	{is_bullet_valid: 0},
	{G_Bullet1: 0},
	{G_Bullet2: 0},
	{DicData: 0},
	{Array_RandomSetGun: 0},
	{Array_DataWave: 0},
	{Array_RandomSetMonster: 0},
	{Array_RandomData: 0},
	{JSON_Guns: 0},
	{JSON_Monsters: 0},
	{JSON_Wall: 0},
	{JSON_Wave: 0},
	{JSON_GunMerge: 0},
	{Touch: 0},
	{AJAX: 0},
	{Audio: 0},
	{TimelineController: 0},
	{Game_BG: 0},
	{Game_IconCoin: 0},
	{Game_ColumnMonsters: 0},
	{G_TextCoinTemplate: 0},
	{G_TimeLineScale: 0},
	{Game_BGTextCoin: 0},
	{startLVL: 0},
	{SaveGuns: 0},
	{Game_ButtonFight: 0},
	{Fade: 0},
	{Game_ContainerCoinBonus: 0},
	{Game_logo: 0},
	{Coin_TextBonus: 0},
	{gun_uid: 0},
	{is_set_shoot: 0},
	{number1: 0},
	{Gun_Set: 0},
	{Gun_SetShoot: 0},
	{C_IconShield: 0},
	{C_Shield: 0},
	{C_TextCoin: 0},
	{dot_order: 0},
	{Bar_Dot: 0},
	{Bar_BGDecoration: 0},
	{Bar_TextWave: 0},
	{WaveFail_ButtonAgain: 0},
	{WaveFaild_Container: 0},
	{WaveFail_GoMain: 0},
	{PremGunBut: 0},
	{Upgrade_ButtonClose: 0},
	{Upgrade_Button: 0},
	{is_pre: 0},
	{Upgrade_ButtonPreNext: 0},
	{is_lock: 0},
	{Upgrade_ButtonUpgrade: 0},
	{Upgrade_Container: 0},
	{Upgrade_IconArrowUp: 0},
	{level: 0},
	{Upgrade_IconStar: 0},
	{order: 0},
	{level_update: 0},
	{price: 0},
	{Upgrade_Item: 0},
	{Upgrade_SetItem: 0},
	{Upgrade_SpriteGun: 0},
	{Upgrade_TextOrder: 0},
	{Upgrade_TextPage: 0},
	{Upgrade_TextPrice: 0},
	{Game_ButtonGoHome: 0},
	{WaveClean_ButtonNextWave: 0},
	{WaveComplete_Container: 0},
	{PauseMenu: 0},
	{ArmoryMenu: 0},
	{Open: 0},
	{MissionMenu: 0},
	{MissionMenu2: 0},
	{Flash: 0},
	{Wall_Bar: 0},
	{Wall_ButtonUpgrade: 0},
	{Wall_Defender: 0},
	{PlayButton: 0},
	{InviteButton: 0},
	{SettingsButton: 0},
	{Pause: 0},
	{PauseButton: 0},
	{Exit: 0},
	{Continue: 0},
	{TaskButton: 0},
	{Start: 0},
	{MissionButton: 0},
	{Browser: 0},
	{GameAnalytics: 0},
	{Date: 0},
	{GamePush: 0},
	{GamePushChannels: 0},
	{Keyboard: 0},
	{LocalStorage: 0},
	{G_TextCoinTemplate2: 0},
	{GunMerge: 0},
	{GunUpgradeT: 0},
	{GunUpgradeT2: 0},
	{type: 0},
	{translate: 0},
	{textTrenslate: 0},
	{Text: 0},
	{Text2: 0},
	{Text3: 0},
	{TextBonus: 0},
	{TextCoin: 0},
	{TextCoinEarn: 0},
	{Timer: 0},
	{"9patch": 0},
	{btn_arrow: 0},
	{btn_arrow2: 0},
	{popUp: 0},
	{buttons: 0},
	{Home_ButtonCancel: 0},
	{Home_ButtonYesDelete: 0},
	{DeleteMenuClose: 0},
	{ID: 0},
	{DeleteMenu: 0},
	{WeaponsBut: 0},
	{PUcost: 0},
	{PowerUPD: 0},
	{SUcost: 0},
	{SpeedUPD: 0},
	{IncreaeBut: 0},
	{Home_TextDescreptionDelete: 0},
	{upgradePos: 0},
	{tutorial: 0},
	{Cryptography: 0},
	{BinaryData: 0},
	{YText: 0},
	{MainMenu: 0},
	{planningField: 0},
	{Property1icncoin: 0},
	{Sprite: 0},
	{Property1tasksicn: 0},
	{WallUpgradeT: 0},
	{WalllevelUpgrade: 0},
	{MissionSt: 0},
	{missionID: 0},
	{MissionBack: 0},
	{LBageActive: 0},
	{windowscroll_ph: 0},
	{Property1upgrade: 0},
	{Property1Cannon: 0},
	{weaponrycardimgph: 0},
	{PremGunLvl: 0},
	{StatsPH: 0},
	{futureTile: 0},
	{Wall_Explosion: 0},
	{Sprite2: 0},
	{languageJSON: 0},
	{saveGuns: 0},
	{bomb: 0},
	{Particles: 0},
	{explosion: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{overlapp: 0},
	{difficultyLine: 0},
	{damgeType: 0},
	{damageRadius: 0},
	{premiumGunsIcon: 0},
	{page: 0},
	{TouchSpeed: 0},
	{SwipeStartPosition: 0},
	{DragDrop: 0},
	{"8Direction": 0},
	{Swipe_Sprite: 0},
	{distinationOut: 0},
	{G_GunFamily: 0},
	{Bullet: 0},
	{G_MonsterFamily: 0},
	{MoveTo: 0},
	{DestroyOutsideLayout: 0},
	{G_BulletFamily: 0},
	{G_SetGunFamily: 0},
	{mouthFam: 0},
	{buttonsFam: 0},
	{boardFam: 0},
	{indexPage: 0},
	{isChangePage: 0},
	{isUpgrading: 0},
	{speedLvl: 0},
	{powerLvl: 0},
	{index: 0},
	{text: 0},
	{integer: 0},
	{isDragGun: 0},
	{isDragingGun: 0},
	{uidSetGun: 0},
	{isBuyGun: 0},
	{isTrashGun: 0},
	{costGun: 0},
	{costGunIncrease: 0},
	{costUnitIncrease: 0},
	{indexAudioShoot: 0},
	{uidGunGuide1: 0},
	{uidGunGuide2: 0},
	{upgradeTimeShot: 0},
	{defaultFiringRate: 0},
	{defaultGunDamage: 0},
	{gunPowerCof: 0},
	{result: 0},
	{order_gun: 0},
	{name: 0},
	{max_order: 0},
	{uid_set_gun: 0},
	{x: 0},
	{y: 0},
	{width: 0},
	{height: 0},
	{gun_uid_set: 0},
	{is_shoot: 0},
	{gun_order_random: 0},
	{premium: 0},
	{uid_monster_shoot: 0},
	{cost_gun_merge: 0},
	{distance_min: 0},
	{x_start: 0},
	{y_start: 0},
	{gun_set_uid_old: 0},
	{uid_set_gun_start_drag: 0},
	{maxGunCount: 0},
	{premiumNumber: 0},
	{type_bullet: 0},
	{speed: 0},
	{Monster_IsDestroyWall: 0},
	{monsterStartHp: 0},
	{monsterStartSpeedMove: 0},
	{monsterAddSpeedCof: 0},
	{monsterHpCof: 0},
	{iceBmbTime: 0},
	{fireBombDamage: 0},
	{value: 0},
	{num_monster: 0},
	{position: 0},
	{type_monster: 0},
	{fullhp: 0},
	{uid_gun: 0},
	{hp: 0},
	{isWaveEnd: 0},
	{isStartWave: 0},
	{isWaveFail: 0},
	{isWaveCreated: 0},
	{isWaveComplete: 0},
	{timeDelayWave: 0},
	{defaultTimeDelayWave: 0},
	{w_DefaultMissionBonus: 0},
	{w_missionBonus: 0},
	{w_missionNumber: 0},
	{w_currentWave: 0},
	{w_minWaveCount: 0},
	{w_maxWaveCount: 0},
	{w_maxLvlWaveCount: 0},
	{w_gameOver: 0},
	{w_missionComplite: 0},
	{w_startGame: 0},
	{w_waveComplite: 0},
	{defaultMonsterCount: 0},
	{MonsterCountCof: 0},
	{defeat: 0},
	{normalHard: 0},
	{monsterHpProcent: 0},
	{addWave: 0},
	{createWave: 0},
	{waveMonsterCount: 0},
	{monsterType: 0},
	{coin: 0},
	{SaveCoin: 0},
	{lvlCoinEarned: 0},
	{coin_template: 0},
	{num_coin: 0},
	{count: 0},
	{wall_isUpgrading: 0},
	{wallHP: 0},
	{wallFullHP: 0},
	{wallLvl: 0},
	{wallMaxLvl: 0},
	{wallStartPriceUpgrade: 0},
	{wallPriceUpgrade: 0},
	{wallWidth: 0},
	{wave_test: 0},
	{gameSpeed: 0},
	{indexGuide: 0},
	{gameSpeedButtonOn: 0},
	{bombLifeTime: 0},
	{bombCreateTime: 0},
	{gameSpeedButtonCharging: 0},
	{pause: 0},
	{missionCountComplite: 0},
	{key: 0},
	{intValue: 0},
	{strValue: 0},
	{intager: 0},
	{string: 0},
	{id: 0},
	{first_name: 0},
	{last_name: 0},
	{language_code: 0},
	{username: 0},
	{frnscid: 0},
	{TGINVITEURL: 0},
	{Start_param: 0},
	{friends: 0},
	{coinDec: 0},
	{friendsCount: 0},
	{FrBonus: 0},
	{DayBonus: 0},
	{SubGiftInterval: 0},
	{SubGiftDate: 0},
	{SubGiftGot: 0},
	{gamePushID: 0},
	{loadTrue: 0},
	{loadComplite: 0},
	{missionType: 0},
	{data: 0},
	{missionCount: 0},
	{missionName: 0},
	{loopindex1: 0},
	{valueInt: 0},
	{valueStr: 0},
	{Swipe_Hight: 0},
	{TouchIndex: 0},
	{maxLoadingProgress: 0},
	{loading_Progress: 0},
	{key_monster: 0},
	{key_guns: 0},
	{key_wall: 0},
	{key_bomb: 0},
	{key_gameSpeedButton: 0},
	{key_wave: 0},
	{K_defaultFiringRate: 0},
	{K_defaultGunDamage: 0},
	{K_gunPowerCof: 0},
	{K_upgradeTimeShot: 0},
	{k_puCost: 0},
	{k_suCost: 0},
	{K_speedLvl: 0},
	{K_powerLvl: 0},
	{K_powerUPD: 0},
	{K_speedUPD: 0},
	{K_costGun: 0},
	{K_wallHP: 0},
	{K_wallFullHP: 0},
	{K_wallLvl: 0},
	{k_wallPriceUpgrade: 0},
	{K_wallMaxLvl: 0},
	{K_coins: 0},
	{K_tutorial: 0},
	{K_subGiftDate: 0},
	{K_subGiftGot: 0},
	{K_monsterAddSpeedCof: 0},
	{K_monsterStartHp: 0},
	{K_monsterStartSpeedMove: 0},
	{k_monsterHpCof: 0},
	{K_indexWaveChild: 0},
	{K_waveCurrent: 0},
	{K_minWaveCount: 0},
	{K_maxWaveCount: 0},
	{k_createWaveTime: 0},
	{k_defaultWaveReward: 0},
	{k_defaultMonsterCount: 0},
	{k_monsterCountCof: 0},
	{k_chargingTime: 0},
	{k_timeOn: 0},
	{k_fireBombDamage: 0},
	{k_iceBobmTime: 0},
	{k_bombLifeTime: 0},
	{k_bombCreateTime: 0}
];

self.InstanceType = {
	G_Gun1: class extends self.ISpriteInstance {},
	G_Gun10: class extends self.ISpriteInstance {},
	G_Gun11: class extends self.ISpriteInstance {},
	G_Gun12: class extends self.ISpriteInstance {},
	G_Gun13: class extends self.ISpriteInstance {},
	G_Gun14: class extends self.ISpriteInstance {},
	G_Gun15: class extends self.ISpriteInstance {},
	G_Gun16: class extends self.ISpriteInstance {},
	G_Gun17: class extends self.ISpriteInstance {},
	G_Gun18: class extends self.ISpriteInstance {},
	G_Gun19: class extends self.ISpriteInstance {},
	G_Gun2: class extends self.ISpriteInstance {},
	G_Gun20: class extends self.ISpriteInstance {},
	G_Gun3: class extends self.ISpriteInstance {},
	G_Gun4: class extends self.ISpriteInstance {},
	G_Gun5: class extends self.ISpriteInstance {},
	G_Gun6: class extends self.ISpriteInstance {},
	G_Gun7: class extends self.ISpriteInstance {},
	G_Gun8: class extends self.ISpriteInstance {},
	G_Gun9: class extends self.ISpriteInstance {},
	Gun_ButtonTrash: class extends self.ISpriteInstance {},
	Gun_ButtonTrashTimeline: class extends self.ISpriteInstance {},
	Guns_ButtonBuy: class extends self.ISpriteInstance {},
	G_Gun21: class extends self.ISpriteInstance {},
	G_Gun22: class extends self.ISpriteInstance {},
	mouth1: class extends self.ISpriteInstance {},
	mouth10: class extends self.ISpriteInstance {},
	mouth11: class extends self.ISpriteInstance {},
	mouth12: class extends self.ISpriteInstance {},
	mouth13: class extends self.ISpriteInstance {},
	mouth14: class extends self.ISpriteInstance {},
	mouth15: class extends self.ISpriteInstance {},
	mouth16: class extends self.ISpriteInstance {},
	mouth17: class extends self.ISpriteInstance {},
	mouth18: class extends self.ISpriteInstance {},
	mouth19: class extends self.ISpriteInstance {},
	mouth2: class extends self.ISpriteInstance {},
	mouth20: class extends self.ISpriteInstance {},
	mouth3: class extends self.ISpriteInstance {},
	mouth4: class extends self.ISpriteInstance {},
	mouth5: class extends self.ISpriteInstance {},
	mouth6: class extends self.ISpriteInstance {},
	mouth7: class extends self.ISpriteInstance {},
	mouth8: class extends self.ISpriteInstance {},
	mouth9: class extends self.ISpriteInstance {},
	G_Monster1: class extends self.ISpriteInstance {},
	G_Monster10: class extends self.ISpriteInstance {},
	G_Monster11: class extends self.ISpriteInstance {},
	G_Monster12: class extends self.ISpriteInstance {},
	G_Monster13: class extends self.ISpriteInstance {},
	G_Monster14: class extends self.ISpriteInstance {},
	G_Monster15: class extends self.ISpriteInstance {},
	G_Monster16: class extends self.ISpriteInstance {},
	G_Monster17: class extends self.ISpriteInstance {},
	G_Monster18: class extends self.ISpriteInstance {},
	G_Monster19: class extends self.ISpriteInstance {},
	G_Monster2: class extends self.ISpriteInstance {},
	G_Monster20: class extends self.ISpriteInstance {},
	G_Monster3: class extends self.ISpriteInstance {},
	G_Monster4: class extends self.ISpriteInstance {},
	G_Monster5: class extends self.ISpriteInstance {},
	G_Monster6: class extends self.ISpriteInstance {},
	G_Monster7: class extends self.ISpriteInstance {},
	G_Monster8: class extends self.ISpriteInstance {},
	G_Monster9: class extends self.ISpriteInstance {},
	Enemy_HpBGbar: class extends self.ISpriteInstance {},
	Enemy_HpBar: class extends self.ISpriteInstance {},
	Monster_ExplosionHit: class extends self.ISpriteInstance {},
	Monster_HPBar: class extends self.ITiledBackgroundInstance {},
	Monster_SpawnScope: class extends self.ISpriteInstance {},
	Monsters_Explosion: class extends self.ISpriteInstance {},
	G_Bullet1: class extends self.ISpriteInstance {},
	G_Bullet2: class extends self.ISpriteInstance {},
	DicData: class extends self.IDictionaryInstance {},
	Array_RandomSetGun: class extends self.IArrayInstance {},
	Array_DataWave: class extends self.IArrayInstance {},
	Array_RandomSetMonster: class extends self.IArrayInstance {},
	Array_RandomData: class extends self.IArrayInstance {},
	JSON_Guns: class extends self.IJSONInstance {},
	JSON_Monsters: class extends self.IJSONInstance {},
	JSON_Wall: class extends self.IJSONInstance {},
	JSON_Wave: class extends self.IJSONInstance {},
	JSON_GunMerge: class extends self.IJSONInstance {},
	Touch: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	TimelineController: class extends self.IInstance {},
	Game_BG: class extends self.ISpriteInstance {},
	Game_IconCoin: class extends self.ISpriteInstance {},
	Game_ColumnMonsters: class extends self.ISpriteInstance {},
	G_TextCoinTemplate: class extends self.ITextInstance {},
	G_TimeLineScale: class extends self.ISpriteInstance {},
	Game_BGTextCoin: class extends self.ISpriteInstance {},
	Game_ButtonFight: class extends self.ISpriteInstance {},
	Game_ContainerCoinBonus: class extends self.ISpriteInstance {},
	Game_logo: class extends self.ISpriteInstance {},
	Coin_TextBonus: class extends self.ISpriteFontInstance {},
	Gun_Set: class extends self.ISpriteInstance {},
	Gun_SetShoot: class extends self.ISpriteInstance {},
	C_IconShield: class extends self.ISpriteInstance {},
	C_Shield: class extends self.ISpriteInstance {},
	C_TextCoin: class extends self.ISpriteFontInstance {},
	Bar_Dot: class extends self.ISpriteInstance {},
	Bar_BGDecoration: class extends self.ISpriteInstance {},
	Bar_TextWave: class extends self.ISpriteFontInstance {},
	WaveFail_ButtonAgain: class extends self.ISpriteInstance {},
	WaveFaild_Container: class extends self.ISpriteInstance {},
	WaveFail_GoMain: class extends self.ISpriteInstance {},
	PremGunBut: class extends self.ISpriteInstance {},
	Upgrade_ButtonClose: class extends self.ISpriteInstance {},
	Upgrade_Button: class extends self.ISpriteInstance {},
	Upgrade_ButtonPreNext: class extends self.ISpriteInstance {},
	Upgrade_ButtonUpgrade: class extends self.ISpriteInstance {},
	Upgrade_Container: class extends self.ISpriteInstance {},
	Upgrade_IconArrowUp: class extends self.ISpriteInstance {},
	Upgrade_IconStar: class extends self.ISpriteInstance {},
	Upgrade_Item: class extends self.ISpriteInstance {},
	Upgrade_SetItem: class extends self.ISpriteInstance {},
	Upgrade_SpriteGun: class extends self.ISpriteInstance {},
	Upgrade_TextOrder: class extends self.ISpriteFontInstance {},
	Upgrade_TextPage: class extends self.ISpriteFontInstance {},
	Upgrade_TextPrice: class extends self.ISpriteFontInstance {},
	Game_ButtonGoHome: class extends self.ISpriteInstance {},
	WaveClean_ButtonNextWave: class extends self.ISpriteInstance {},
	WaveComplete_Container: class extends self.ISpriteInstance {},
	PauseMenu: class extends self.ISpriteInstance {},
	ArmoryMenu: class extends self.ISpriteInstance {},
	MissionMenu: class extends self.ISpriteInstance {},
	MissionMenu2: class extends self.ISpriteInstance {},
	Wall_Bar: class extends self.ITiledBackgroundInstance {},
	Wall_ButtonUpgrade: class extends self.ISpriteInstance {},
	Wall_Defender: class extends self.ISpriteInstance {},
	PlayButton: class extends self.ISpriteInstance {},
	InviteButton: class extends self.ISpriteInstance {},
	SettingsButton: class extends self.ISpriteInstance {},
	PauseButton: class extends self.ISpriteInstance {},
	Exit: class extends self.ISpriteInstance {},
	Continue: class extends self.ISpriteInstance {},
	TaskButton: class extends self.ISpriteInstance {},
	MissionButton: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	GameAnalytics: class extends self.IInstance {},
	Date: class extends self.IInstance {},
	GamePush: class extends self.IInstance {},
	GamePushChannels: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	G_TextCoinTemplate2: class extends self.ITextInstance {},
	GunMerge: class extends self.ITextInstance {},
	GunUpgradeT: class extends self.ITextInstance {},
	GunUpgradeT2: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	TextBonus: class extends self.ITextInstance {},
	TextCoin: class extends self.ITextInstance {},
	TextCoinEarn: class extends self.ITextInstance {},
	_9patch: class extends self.IWorldInstance {},
	btn_arrow: class extends self.ISpriteInstance {},
	btn_arrow2: class extends self.ISpriteInstance {},
	buttons: class extends self.ISpriteInstance {},
	Home_ButtonCancel: class extends self.ISpriteInstance {},
	Home_ButtonYesDelete: class extends self.ISpriteInstance {},
	DeleteMenuClose: class extends self.ISpriteInstance {},
	DeleteMenu: class extends self.ISpriteInstance {},
	WeaponsBut: class extends self.ISpriteInstance {},
	PowerUPD: class extends self.ISpriteInstance {},
	SpeedUPD: class extends self.ISpriteInstance {},
	IncreaeBut: class extends self.ISpriteInstance {},
	Home_TextDescreptionDelete: class extends self.ITextInstance {},
	tutorial: class extends self.ISpriteInstance {},
	Cryptography: class extends self.IInstance {},
	BinaryData: class extends self.IBinaryDataInstance {},
	YText: class extends self.ITextInputInstance {},
	MainMenu: class extends self.ISpriteInstance {},
	planningField: class extends self.ISpriteInstance {},
	Property1icncoin: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Property1tasksicn: class extends self.ISpriteInstance {},
	WallUpgradeT: class extends self.ITextInstance {},
	WalllevelUpgrade: class extends self.ITextInstance {},
	MissionSt: class extends self.ISpriteInstance {},
	MissionBack: class extends self.ISpriteInstance {},
	LBageActive: class extends self.ISpriteInstance {},
	windowscroll_ph: class extends self.ISpriteInstance {},
	Property1upgrade: class extends self.ISpriteInstance {},
	Property1Cannon: class extends self.ISpriteInstance {},
	weaponrycardimgph: class extends self.ISpriteInstance {},
	PremGunLvl: class extends self.ISpriteInstance {},
	StatsPH: class extends self.ISpriteInstance {},
	futureTile: class extends self.ITiledBackgroundInstance {},
	Wall_Explosion: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	languageJSON: class extends self.IJSONInstance {},
	saveGuns: class extends self.IDictionaryInstance {},
	bomb: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	explosion: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	popUp: class extends self.ISpriteInstance {},
	difficultyLine: class extends self.ITiledBackgroundInstance {},
	price: class extends self.IDictionaryInstance {},
	damageRadius: class extends self.ISpriteInstance {},
	premiumGunsIcon: class extends self.ISpriteInstance {},
	page: class extends self.ISpriteInstance {},
	Swipe_Sprite: class extends self.ISpriteInstance {},
	distinationOut: class extends self.ISpriteInstance {},
	G_GunFamily: class extends self.ISpriteInstance {},
	G_MonsterFamily: class extends self.ISpriteInstance {},
	G_BulletFamily: class extends self.ISpriteInstance {},
	G_SetGunFamily: class extends self.ISpriteInstance {},
	mouthFam: class extends self.ISpriteInstance {},
	buttonsFam: class extends self.ISpriteInstance {},
	boardFam: class extends self.ISpriteInstance {}
}